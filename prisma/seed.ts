import { PrismaClient } from '@prisma/client'
import { name } from 'faker'

main()

async function main() {
  const prisma = new PrismaClient()
  const userData = await prisma.user.create({
    data: {
      name: name.firstName(),
    },
  })

  console.log('added user data:\n', userData)
  await prisma.$disconnect()
}
