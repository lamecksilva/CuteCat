import { connect, connection } from 'mongoose';

import models from '../models';

/**
 * connectMongoDB
 *
 * Connect the app to the MongoDB Database
 */
export function connectMongoDB() {
	const MONGO_URL =
		process.env.MONGO_URL || 'mongodb://localhost:27017/CuteCat-Auth-Service';

	connect(MONGO_URL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	});

	connection.on('connected', () => console.info('MongoDB Connect'));
	connection.on('error', (error) => {
		console.log('MongoDB connection error');
		console.error(error);
	});
}

/**
 * dropMongoDatabase
 *
 * Drop the Database
 */
export function dropMongoDatabase() {
	connection.dropDatabase();
}

/**
 * closeMongo
 *
 * Close MongoDB Connection
 */
export function closeMongo() {
	connection.close();
}

/**
 * loadModels
 *
 * Load the models from database
 */
export function loadModels() {
	return models;
}
