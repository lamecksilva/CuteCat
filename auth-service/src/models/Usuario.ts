import { model, Schema } from 'mongoose';

const usuarioSchema = new Schema(
	{
		status: {
			type: Boolean,
			required: true,
			default: true,
		},
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
		telefone: {
			type: String,
			required: false,
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
