import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetList = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetList), resolver.authorize(), async ({ id }, ctx) => {
  const { userId } = ctx.session

  const list = await db.list.findFirst({
    where: { id, userId },
  })

  if (!list) {
    throw new NotFoundError()
  }

  return list
})
