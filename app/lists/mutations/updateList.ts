import { resolver } from "blitz"
import db, { Prisma } from "db"
import { z } from "zod"

const UpdateList = z.object({
  id: z.string(),
  name: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateList),
  resolver.authorize(),
  async ({ id, ...data }) => {
    const list = await db.list.update({ where: { id }, data })

    return list
  }
)
