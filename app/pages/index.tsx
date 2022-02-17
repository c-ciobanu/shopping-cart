import { BlitzPage, useMutation, Routes, useSession } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import Button from "@mui/material/Button"
import Link from "app/core/components/Link"

type LoggedInProps = {
  currentUser: Exclude<ReturnType<typeof useCurrentUser>, null>
}

const LoggedIn = (props: LoggedInProps) => {
  const { currentUser } = props
  const [logoutMutation] = useMutation(logout)

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
    </>
  )
}

const LoggedOut = () => {
  return (
    <>
      <Link href={Routes.SignupPage()}>Sign Up</Link>
      <br />
      <Link href={Routes.LoginPage()}>Login</Link>
    </>
  )
}

const Home: BlitzPage = () => {
  const currentUser = useCurrentUser()

  return currentUser ? <LoggedIn currentUser={currentUser} /> : <LoggedOut />
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
