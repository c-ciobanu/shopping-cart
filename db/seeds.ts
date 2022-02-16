import { List, User, UserRole } from "@prisma/client"
import { SecurePassword } from "blitz"
import { Chance } from "chance"
import db from "./index"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  const users: User[] = []
  const hashedPassword = await SecurePassword.hash("asdfg12345")

  for (let i = 0; i < 3; i++) {
    const user = await db.user.create({
      data: { email: `user${i + 1}@test.com`, hashedPassword, role: UserRole.USER },
    })

    users.push(user)
  }

  const lists: List[] = []

  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < 3; j++) {
      const list = await db.list.create({
        data: { name: `user${i + 1} List ${j + 1}`, userId: users[i]!.id },
      })

      lists.push(list)
    }
  }

  const chance = new Chance()

  for (let i = 0; i < lists.length; i++) {
    for (let j = 0; j < 3; j++) {
      await db.item.create({
        data: { name: chance.word(), listId: lists[i]!.id },
      })
    }
  }
}

export default seed
