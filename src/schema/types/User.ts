import {
  extendType,
  list,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import {
  createUserResolver,
  getUsersResolver,
} from "../../resolvers/usersResolver";

export const createUser = extendType({
  type: "Mutation",
  definition: t => {
    t.field("createUser", {
      type: user,
      args: { name: nonNull(stringArg()) },
      resolve: createUserResolver,
    });
  },
});

export const getUsers = extendType({
  type: "Query",
  definition: t => {
    t.field("getUsers", {
      type: list(user),
      resolve: getUsersResolver
    });
  },
});

const user = objectType({
  name: "user",
  definition: t => {
    t.string("name");
  },
});