import { Suspense } from "react"
import { BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import Button from "@mui/material/Button"
import Link from "app/core/components/Link"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
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
  } else {
    return (
      <>
        <Link href={Routes.SignupPage()}>Sign Up</Link>
        <br />
        <Link href={Routes.LoginPage()}>Login</Link>
      </>
    )
  }
}

const Home: BlitzPage = () => {
  return (
    <Suspense fallback="Loading...">
      <UserInfo />
    </Suspense>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
