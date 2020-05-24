import express, { json } from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import { connectMongoDB, loadModels } from './database';
import schema from './schema';

export async function startServer() {
	const app = express();

	app.use(json());

	connectMongoDB();
	loadModels();

	app.use('/graphql', graphqlExpress({ schema }));

	process.env.NODE_ENV !== 'production' &&
		app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

	const PORT = process.env.PORT || 9001;

	app.listen(PORT, () => {
		console.info(`Server Running on PORT: ${PORT}`);
	});
}
