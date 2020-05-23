import { Usuario } from '../../models/Usuario';

export const typeDef = `
  type Query {
    Usuarios: [Usuario]
  }
`;

export const resolvers = {
	Query: {
		usuarios: async () => {
			const usuarios = await Usuario.find({}).lean();

			return usuarios;
		},
	},
};
