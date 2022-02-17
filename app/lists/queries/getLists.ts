import { resolver } from "blitz"
import db, { Prisma } from "db"

interface GetListsInput extends Pick<Prisma.ListFindManyArgs, "where" | "orderBy"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy }: GetListsInput, ctx) => {
    const { userId } = ctx.session

    const lists = db.list.findMany({ where: { userId, ...where }, orderBy })

    return lists
  }
)
