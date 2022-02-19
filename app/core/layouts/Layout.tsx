import { Stack, CircularProgress, Container } from "@mui/material"
import { Head, BlitzLayout } from "blitz"
import { Suspense } from "react"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Shopping Cart"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container component="main" maxWidth="sm">
        <Suspense
          fallback={
            <Stack alignItems="center" justifyContent="center" height="100vh">
              <CircularProgress />
            </Stack>
          }
        >
          {children}
        </Suspense>
      </Container>
    </>
  )
}

export default Layout
