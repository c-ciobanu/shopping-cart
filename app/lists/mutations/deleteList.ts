import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteList = z.object({
  id: z.string(),
})

export default resolver.pipe(resolver.zod(DeleteList), resolver.authorize(), async ({ id }) => {
  const list = await db.list.delete({ where: { id } })

  return list
})
