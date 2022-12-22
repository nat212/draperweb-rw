export const schema = gql`
  type Product {
    id: Int!
    title: String!
    desc: String!
    tags: [Tag]!
  }

  type Query {
    products: [Product!]! @skipAuth
    product(id: Int!): Product @skipAuth
  }

  input CreateProductInput {
    title: String!
    desc: String!
  }

  input UpdateProductInput {
    title: String
    desc: String
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @skipAuth
    updateProduct(id: Int!, input: UpdateProductInput!): Product! @skipAuth
    deleteProduct(id: Int!): Product! @skipAuth
  }
`
