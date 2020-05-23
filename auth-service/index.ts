import express, { Request, Response } from 'express';

const app = express();

app.get('/', (_: Request, res: Response) => {
	console.log('Auth Service Works');

	return res.status(200).json({ message: 'Auth Service ONLINE' });
});

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
});
