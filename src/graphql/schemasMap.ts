import 'graphql-import-node';
import * as productTypeDefs from './schemas/product.graphql';
// import productTypeDefs from './schemas/product';
// console.log(productTypeDefs);
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolversMap'
import { GraphQLSchema } from 'graphql'
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [productTypeDefs],
  resolvers
})

// const typeDefs = `
//   type Person {
//     name: String!
//   }
//   extend type Person {
//     salary: Int
//   }  
//   type Query {
//     person: Person
//   }
//   type Query {
//     product(name: String!): Product!
//   }
  
//   type Mutation {
//     product(name: String!): Product!
//   }
  
//   type Product {
//     name: String!
//   }
// `;

// const typeDefs = `
//   type Query {
//     product(name: String!): Product!
//   }
  
//   type Mutation {
//     product(name: String!): Product!
//   }
  
//   type Product {
//     name: String!
//   }
// `;

// const resolvers = {
//   Query: {
//     person: () => ({ name: "John Doe", salary: 1234 })
//   }
// }  

// const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema