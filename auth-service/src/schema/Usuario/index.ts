import { gql } from 'apollo-server-express';

export const typeDef = gql`
	scalar Date

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
