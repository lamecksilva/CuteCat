import { gql } from 'apollo-server-express';

import { Usuario } from '../../models/Usuario';

export const typeDef = gql`
	type Query {
		Usuarios: [Usuario]
	}
`;

export const resolvers = {
	Query: {
		Usuarios: async () => {
			const usuarios = await Usuario.find({}).lean();

			return usuarios;
		},
	},
};
