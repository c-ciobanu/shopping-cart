import { resolver } from "blitz"
import db, { Prisma } from "db"

interface GetItemsInput extends Pick<Prisma.ItemFindManyArgs, "where" | "orderBy"> {}

export default resolver.pipe(resolver.authorize(), async ({ where, orderBy }: GetItemsInput) => {
  const items = db.item.findMany({ where, orderBy })

  return items
})
