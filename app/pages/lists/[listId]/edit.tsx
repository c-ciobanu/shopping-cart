import { Head, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getList from "app/lists/queries/getList"
import updateList from "app/lists/mutations/updateList"
import { ListForm, FORM_ERROR } from "app/lists/components/ListForm"

const EditListPage: BlitzPage = () => {
  const router = useRouter()
  const listId = useParam("listId", "string")
  const [list] = useQuery(
    getList,
    { id: listId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateListMutation] = useMutation(updateList)

  return (
    <>
      <Head>
        <title>Edit List - {list.name}</title>
      </Head>

      <div>
        <h1>Edit List - {list.name}</h1>

        <ListForm
          submitText="Update"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateList}
          initialValues={list}
          onSubmit={async (values) => {
            try {
              await updateListMutation({
                id: list.id,
                ...values,
              })

              router.push(Routes.Home())
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </div>
    </>
  )
}

EditListPage.authenticate = true
EditListPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditListPage
