import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server-express'
import * as express from 'express';

import schema from './schema'
import { createContext } from './context'

const prisma = new PrismaClient()
const apollo = new ApolloServer({
  context: createContext(),
  schema: schema
});

const app = express()

apollo.start().then(res => {
  apollo.applyMiddleware({ app })
  app.listen(4000, () => {
    console.log(`🚀 GraphQL service ready at http://localhost:4000/graphql`)
  })
});


