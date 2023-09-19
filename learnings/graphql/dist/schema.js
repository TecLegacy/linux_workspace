export const typeDefs = `#graphql 
  type Game{
    id: ID!
    title: String!
    platform:[String!]!
  }
  type Author{
    id: ID!
    name: String!
    verified:Boolean!
  }
  type Review{
    id: ID!
    rating: Int!
    content:String!
  }

  # Entry Points 
  type Query{
    games:[Game]
    reviews:[Review]
    authors:[Author]

    singleGame(id:ID!):Game
    singleReview(id:ID!):Review
    singleAuthor(id:ID!):Author
  }
`;
