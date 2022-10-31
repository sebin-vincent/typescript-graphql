import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    categories: [Category!]!
    category(id: ID!): Category
    products: [Product]!
    product(id: ID!): Product
  }

  type Mutation {
    addCategory(input: addCategoryInput!): Category!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category!
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(input: CategoryFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    comment: String!
    rating: Int!
  }

  input CategoryFilterInput {
    productOnSale: Boolean
    averageProductRating: Int
  }

  input addCategoryInput {
    name: String!
  }
`;
