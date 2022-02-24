import { BlitzPage, useMutation, Routes, useQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import Button from "@mui/material/Button"
import Link, { BlitzLinkComposed } from "app/core/components/Link"
import getLists from "app/lists/queries/getLists"
import {
  AppBar,
  Card,
  CardHeader,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import { useState } from "react"
import { Box } from "@mui/system"
import deleteList from "app/lists/mutations/deleteList"

type ListSettingsMenuProps = {
  listId: number
  onDelete: () => Promise<void>
}

const ListSettingsMenu = (props: ListSettingsMenuProps) => {
  const { listId, onDelete } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => setAnchorEl(null)

  return (
    <Box>
      <IconButton
        aria-label="list settings"
        id={`list-settings-button-${listId}`}
        aria-controls={open ? `list-settings-menu-${listId}` : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id={`list-settings-menu-${listId}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": `list-settings-button-${listId}`,
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon sx={{ minWidth: "30px !important" }}>
            <EditIcon fontSize="small" />
          </ListItemIcon>

          <ListItemText>
            <Link href={Routes.EditListPage({ listId })} underline="none" color="inherit">
              Edit
            </Link>
          </ListItemText>
        </MenuItem>

        <Divider component="li" />

        <MenuItem
          onClick={() => {
            handleClose()

            onDelete()
          }}
          sx={{ color: "error.main" }}
        >
          <ListItemIcon sx={{ minWidth: "30px !important" }}>
            <DeleteIcon fontSize="small" color="error" />
          </ListItemIcon>

          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}

const LoggedIn = () => {
  const [logoutMutation] = useMutation(logout)
  const [lists, { setQueryData }] = useQuery(getLists, {
    orderBy: { name: "asc" },
  })
  const [deleteListMutation] = useMutation(deleteList)

  return (
    <>
      <AppBar position="static" sx={{ marginBottom: 2 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Lists
          </Typography>

          <Button component={BlitzLinkComposed} to={Routes.NewListPage()} color="inherit">
            <AddIcon />
          </Button>

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
        {lists.map((list) => (
          <Card key={list.id} variant="outlined">
            <CardHeader
              action={
                <ListSettingsMenu
                  listId={list.id}
                  onDelete={async () => {
                    await deleteListMutation({ id: list.id })

                    setQueryData(
                      lists.filter((l) => l.id !== list.id),
                      { refetch: false }
                    )
                  }}
                />
              }
              title={
                <Link
                  href={Routes.ShowListPage({ listId: list.id })}
                  underline="none"
                  color="inherit"
                >
                  {list.name}
                </Link>
              }
              titleTypographyProps={{ fontSize: "1rem" }}
            />
          </Card>
        ))}
      </Stack>
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

  return currentUser ? <LoggedIn /> : <LoggedOut />
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
