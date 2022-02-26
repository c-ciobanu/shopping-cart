import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { useState } from "react"
import AddIcon from "@mui/icons-material/Add"
import { useMutation } from "blitz"
import createItem from "../mutations/createItem"
import { Item } from "@prisma/client"

type AddItemFormDialogProps = {
  listId: number
  onSubmit: (item: Item) => Promise<void> | void
}

export function AddItemFormDialog(props: AddItemFormDialogProps) {
  const { listId, onSubmit } = props
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [createItemMutation] = useMutation(createItem)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button color="inherit" onClick={handleClickOpen}>
        <AddIcon />
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <Form
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={CreateItem}
          // initialValues={{}}
          onSubmit={async (values) => {
            setSubmitting(true)

            try {
              const item = await createItemMutation({ ...values, listId })

              await onSubmit(item)

              setSubmitting(false)
              handleClose()
            } catch (error: any) {
              console.error(error)

              setSubmitting(false)

              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        >
          <DialogTitle>Create Item</DialogTitle>

          <DialogContent>
            <LabeledTextField name="name" label="Name" placeholder="Name" autoFocus />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>

            <Button type="submit" disabled={submitting}>
              Create
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
    </>
  )
}
