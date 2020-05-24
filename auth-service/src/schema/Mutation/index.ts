import { gql } from 'apollo-server-express';

import { hash } from 'bcrypt';

import { Usuario } from '../../models/Usuario';
import { validateCreateUsuarioInput } from '../../utils';

export const typeDef = gql`
	type Mutation {
		createUsuario(input: CreateUsuarioInput!): CreateUsuarioPayload
	}

	input CreateUsuarioInput {
		nome: String!
		email: String!
		telefone: String!
		senha: String!
		senha_confirmation: String!
	}

	type CreateUsuarioPayload {
		Usuario: Usuario
		errors: [ErrorType]
	}

	type ErrorType {
		key: String
		message: String
	}
`;

export const resolvers = {
	Mutation: {
		createUsuario: async (_: any, { input }: any, { req }: any) => {
			console.log(req.headers);

			const { errors, isValid } = await validateCreateUsuarioInput(input);

			if (!isValid) {
				return { Usuario: null, errors };
			} else {
				input.senha = await hash(input.senha, 10);

				const usuarioSaved = await new Usuario(input).save();

				return { Usuario: usuarioSaved, errors };
			}
		},
	},
};
