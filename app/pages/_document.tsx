import { CssBaseline } from "@mui/material"
import { Document, Html, DocumentHead, Main, BlitzScript /*DocumentContext*/ } from "blitz"

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }

  render() {
    return (
      <>
        <CssBaseline />

        <Html lang="en">
          <DocumentHead>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          </DocumentHead>

          <body>
            <Main />
            <BlitzScript />
          </body>
        </Html>
      </>
    )
  }
}

export default MyDocument
