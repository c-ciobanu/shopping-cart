import { Head, useQuery, useParam, BlitzPage, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"
import getList from "app/lists/queries/getList"
import {
  AppBar,
  Button,
  Card,
  Checkbox,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material"
import RemoveIcon from "@mui/icons-material/Remove"
import logout from "app/auth/mutations/logout"
import deleteItem from "app/items/mutations/deleteItem"

const ShowListPage: BlitzPage = () => {
  const listId = useParam("listId", "number")
  const [list, { setQueryData }] = useQuery(getList, { id: listId })
  const [logoutMutation] = useMutation(logout)
  const [deleteItemMutation] = useMutation(deleteItem)

  return (
    <>
      <Head>
        <title>{list.name}</title>
      </Head>

      <AppBar position="static" sx={{ marginBottom: 2 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {list.name}
          </Typography>

          <Button
            color="inherit"
            onClick={async () => {
              await logoutMutation()
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Stack spacing={2}>
        {list.items.map((item) => (
          <Card key={item.id} variant="outlined">
            <Stack direction="row" alignItems="center">
              <Checkbox />

              <Typography sx={{ flexGrow: 1 }}>{item.name}</Typography>

              <IconButton
                onClick={async () => {
                  await deleteItemMutation({ id: item.id })

                  setQueryData(
                    { ...list, items: list.items.filter((i) => i.id !== item.id) },
                    { refetch: false }
                  )
                }}
              >
                <RemoveIcon color="error" />
              </IconButton>
            </Stack>
          </Card>
        ))}
      </Stack>
    </>
  )
}

ShowListPage.authenticate = true
ShowListPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowListPage
