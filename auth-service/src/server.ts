import express, { json } from 'express';
import { graphqlExpress } from 'apollo-server-express';

import { connectMongoDB, loadModels } from './database';
import schema from './schema';

export async function startServer() {
	const app = express();

	app.use(json());

	connectMongoDB();
	loadModels();

	app.use('/graphql', graphqlExpress({ schema }));

	const PORT = process.env.PORT || 9001;

	app.listen(PORT, () => {
		console.info(`Server Running on PORT: ${PORT}`);
	});
}
