import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateItem = z.object({
  name: z.string(),
  listId: z.number(),
})

export default resolver.pipe(resolver.zod(CreateItem), resolver.authorize(), async (input) => {
  const item = await db.item.create({ data: input })

  return item
})
