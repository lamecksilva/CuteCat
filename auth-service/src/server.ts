import express from 'express';
import { connectMongoDB, loadModels } from './database';

export async function startServer() {
	const app = express();

	const PORT = process.env.PORT || 9001;

	connectMongoDB();
	loadModels();

	app.listen(PORT, () => {
		console.info(`Server Running on PORT: ${PORT}`);
	});
}
