import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateItem = z
  .object({
    id: z.number(),
    name: z.string().optional(),
    checked: z.boolean().optional(),
  })
  .refine((data) => !!data.name || data.checked !== undefined, {
    message: "Either name or checked should be filled in",
    path: ["name", "checked"],
  })

export default resolver.pipe(
  resolver.zod(UpdateItem),
  resolver.authorize(),
  async ({ id, ...data }) => {
    const item = await db.item.update({ where: { id }, data })

    return item
  }
)
