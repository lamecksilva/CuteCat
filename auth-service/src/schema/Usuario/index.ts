export const typeDef = `
  type Usuario {
    status: Boolean!
    id: ID!
    nome: String!
    email: String!
    telefone: String
    foto: String
    createdAt: Date!
    updatedAt: Date!
  }
`;

export const resolvers = {
	Usuario: {
		id: ({ _id }: any) => _id,
	},
};
