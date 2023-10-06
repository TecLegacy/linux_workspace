import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import db from './db';

import { typeDefs } from './schema';

// Resolver function
const resolvers = {
  Query: {
    // Expose Games
    game(_: null, { id }: { id: string }) {
      return db.games.find(game => game.id === id);
    },

    games() {
      return db.games;
    },

    // Expose Reviews
    reviews() {
      return db.reviews;
    },
    review(_: null, { id }: { id: string }) {
      return db.reviews.find(review => review.id === id);
    },

    //Expose Authors
    authors() {
      return db.authors;
    },
    author(_: null, { id }: { id: string }) {
      return db.authors.find(author => author.id === id);
    },
  },
};

// Server Setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
