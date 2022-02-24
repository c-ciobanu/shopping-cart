import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateList = z.object({
  name: z.string(),
})

export default resolver.pipe(resolver.zod(CreateList), resolver.authorize(), async (input, ctx) => {
  const { userId } = ctx.session

  const list = await db.list.create({ data: { ...input, userId } })

  return list
})
