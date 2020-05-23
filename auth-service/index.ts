import express, { Request, Response, json } from 'express';

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

const app = express();

app.use(json());

app.get('/', (_: Request, res: Response) => {
	console.log('Auth Service Works');

	return res.status(200).json({ message: 'Auth Service ONLINE' });
});

// ===========================================================

// Some fake data
const books = [
	{
		title: "Harry Potter and the Sorcerer's stone",
		author: 'J.K. Rowling',
	},
	{
		title: 'Jurassic Park',
		author: 'Michael Crichton',
	},
	{
		title: 'Lameco STREAM',
		author: 'Lameco',
	},
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }

  type Mutation {
    addBook(input: createBookInput!): Book
  }

  input createBookInput {
    title: String!
    author: String!
  }

  type Book { title: String, author: String }
`;

// The resolvers
const resolvers = {
	Query: { books: () => books },

	Mutation: {
		addBook: (_: any, { input }: any) => {
			books.push(input);

			return input;
		},
	},
};

// Put together a schema
const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
});
