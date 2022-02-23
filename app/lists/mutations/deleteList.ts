import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteList = z.object({
  id: z.number(),
})

export default resolver.pipe(
  resolver.zod(DeleteList),
  resolver.authorize(),
  async ({ id }, ctx) => {
    const { userId } = ctx.session

    const list = await db.list.deleteMany({ where: { id, userId } })

    return list
  }
)
