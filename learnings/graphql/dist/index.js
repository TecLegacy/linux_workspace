import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import db from './db.js';
import { typeDefs } from './schema.js';
// Resolver function
const resolvers = {
    Query: {
        // Expose Games
        singleGame(_, { id }) {
            return db.games.find(game => game.id === id);
        },
        games() {
            return db.games;
        },
        // Expose Reviews
        reviews() {
            return db.reviews;
        },
        singleReview(_, { id }) {
            return db.reviews.find(review => review.id === id);
        },
        //Expose Authors
        authors() {
            return db.authors;
        },
        singleAuthor(_, { id }) {
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
