import dotenv from 'dotenv-safe';
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { Category } from './resolvers/category';
import { Product } from './resolvers/product';
import { categories, products,reviews } from './db';
import { Query } from './resolvers/query';



dotenv.config();


const resolvers = {
  Query,
  Category,
  Product
};

const server = new ApolloServer({ typeDefs, resolvers,context:{
  categories,
  products,
  reviews
} });
server.listen().then(({ url }) => {
  console.log(`server is listening at ${url}`);
})

