import { FieldResolver } from 'nexus'

export const createUserResolver: FieldResolver<
  'Mutation',
  'createUser'
> = async (_, { name }, { prisma }) => {
  return await prisma.user.create({
    data: {
      name: name,
    },
  })
}

export const updateUserResolver: FieldResolver<
  'Mutation',
  'updateUser'
> = async (_, { id, name }, { prisma }) => {
  return await prisma.user.update({
    where: {
      id: id ?? undefined,
    },
    data: {
      name: name,
    },
  })
}

export const deleteUserResolver: FieldResolver<
  'Mutation',
  'deleteUser'
> = async (_, { id }, { prisma }) => {
  return await prisma.user.delete({
    where: {
      id: id ?? undefined,
    },
  })
}

export const getUsersResolver: FieldResolver<'Query', 'getUsers'> = async (
  _,
  __,
  { prisma },
) => {
  return await prisma.user.findMany({
    orderBy: {
      id: 'asc',
    },
  })
}

export const findUserResolver: FieldResolver<'Query', 'findUser'> = async (
  _,
  { id },
  { prisma },
) => {
  return await prisma.user.findUnique({
    where: {
      id: id ?? undefined,
    },
  })
}
