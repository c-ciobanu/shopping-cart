import { Container } from "@mui/material"
import { Head, BlitzLayout } from "blitz"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Shopping Cart"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm">
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout
