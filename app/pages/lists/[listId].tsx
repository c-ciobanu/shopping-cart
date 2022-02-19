import { Head, useQuery, useParam, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import getList from "app/lists/queries/getList"

const ShowListPage: BlitzPage = () => {
  const listId = useParam("listId", "number")
  const [list] = useQuery(getList, { id: listId })

  return (
    <>
      <Head>
        <title>List {list.id}</title>
      </Head>

      <h1>List {list.id}</h1>

      <ul>
        {list.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}

ShowListPage.authenticate = true
ShowListPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowListPage
