import { Usuario } from '../../models/Usuario';
import { hash } from 'bcrypt';

export const typeDef = `
  type Mutation {
    createUsuario(input: CreateUsuarioInput!): Usuario
  }

  input CreateUsuarioInput {
    nome: String!
    email: String!
    telefone: String!
    senha: String!
    senha_confirmation: String!
  }
`;

export const resolvers = {
	Mutation: {
		createUsuario: async (_: any, { input }: any) => {
			console.log(input);

			if (input.senha === input.senha_confirmation) {
				input.senha = await hash(input.senha, 10);

				const usuario = new Usuario(input);

				await usuario.save();

				return usuario;
			}
		},
	},
};
