import express, { json } from 'express';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';

import { connectMongoDB, loadModels } from './database';
import schema from './schema';

export async function startServer() {
	const app = express();

	app.use(json());

	connectMongoDB();
	loadModels();

	// process.env.NODE_ENV !== 'production' &&
	// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

	const server = new ApolloServer({
		schema,
		context: ({ req }: any) => {
			// if (!req.headers.authorization)
			// throw new AuthenticationError('Authentication Error');

			return { req };
		},
	});

	server.applyMiddleware({ app });

	const PORT = process.env.PORT || 9001;

	app.listen(PORT, () => {
		console.info(`Server Running on PORT: ${PORT}`);
	});
}
