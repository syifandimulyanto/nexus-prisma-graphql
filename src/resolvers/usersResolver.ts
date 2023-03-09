import { FieldResolver } from "nexus";

export const createUserResolver: FieldResolver<
  "Mutation",
  "createUser"
> = async (_, { name }, { prisma }) => {
  const newUser = await prisma.user.create({
    data: {
      name: name
    },
  });
  return {
    name
  };
};

export const getUsersResolver: FieldResolver<
  "Query",
  "getUsers"
> = async (_, __, { prisma}) => {
  const users = await prisma.user.findMany({
    select: {
      name: true
    },
    orderBy: {
      id: "desc",
    },
  });
  return users;
};