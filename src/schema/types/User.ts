import { extendType, intArg, list, nonNull, objectType, stringArg } from 'nexus'
import {
  createUserResolver,
  getUsersResolver,
  findUserResolver,
  updateUserResolver,
  deleteUserResolver,
} from '../../resolvers/usersResolver'

export const create = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createUser', {
      type: user,
      args: { name: nonNull(stringArg()) },
      resolve: createUserResolver,
    })
  },
})

export const update = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('updateUser', {
      type: user,
      args: {
        id: nonNull(intArg()),
        name: nonNull(stringArg()),
      },
      resolve: updateUserResolver,
    })
  },
})

export const destroy = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('deleteUser', {
      type: user,
      args: {
        id: nonNull(intArg()),
      },
      resolve: deleteUserResolver,
    })
  },
})

export const getUsers = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('getUsers', {
      type: list(user),
      resolve: getUsersResolver,
    })
  },
})

export const findUser = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('findUser', {
      type: user,
      args: {
        id: nonNull(intArg()),
      },
      resolve: findUserResolver,
    })
  },
})

const user = objectType({
  name: 'user',
  definition: (t) => {
    t.int('id')
    t.string('name')
  },
})
