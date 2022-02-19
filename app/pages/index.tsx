import { BlitzPage, useMutation, Routes, useQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import Button from "@mui/material/Button"
import Link, { BlitzLinkComposed } from "app/core/components/Link"
import getLists from "app/lists/queries/getLists"
import { Stack } from "@mui/material"

type LoggedInProps = {
  currentUser: Exclude<ReturnType<typeof useCurrentUser>, null>
}

const LoggedIn = (props: LoggedInProps) => {
  const { currentUser } = props
  const [logoutMutation] = useMutation(logout)
  const [lists] = useQuery(getLists, {
    orderBy: { name: "asc" },
  })

  return (
    <>
      <Button
        variant="contained"
        onClick={async () => {
          await logoutMutation()
        }}
      >
        Logout
      </Button>

      <div>
        User id: <code>{currentUser.id}</code>
        <br />
        User role: <code>{currentUser.role}</code>
      </div>

      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            <Link href={Routes.ShowListPage({ listId: list.id })}>
              <a>{list.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

const LoggedOut = () => {
  return (
    <Stack alignItems="center" justifyContent="center" height="100vh" spacing={2}>
      <Button component={BlitzLinkComposed} to={Routes.SignupPage()} variant="contained">
        Sign Up
      </Button>

      <Button component={BlitzLinkComposed} to={Routes.LoginPage()} variant="contained">
        Login
      </Button>
    </Stack>
  )
}

const Home: BlitzPage = () => {
  const currentUser = useCurrentUser()

  return currentUser ? <LoggedIn currentUser={currentUser} /> : <LoggedOut />
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
