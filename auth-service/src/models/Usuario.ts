import { model, Schema } from 'mongoose';

const usuarioSchema = new Schema(
	{
		nome: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		senha: {
			type: String,
			required: true,
		},
		foto: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
		collection: 'usuarios',
	}
);

export const Usuario = model('Usuario', usuarioSchema);
