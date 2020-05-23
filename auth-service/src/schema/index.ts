import { makeExecutableSchema } from 'graphql-tools';

import { typeDef as QueryTypeDef, resolvers as QueryResolvers } from './Query';
import {
	typeDef as MutationTypeDef,
	resolvers as MutationResolvers,
} from './Mutation';

import {
	typeDef as UsuarioTypeDef,
	resolvers as UsuarioResolvers,
} from './Usuario';

export const typeDefs = [QueryTypeDef, MutationTypeDef, UsuarioTypeDef];

export const resolvers = {
	...QueryResolvers,
	...MutationResolvers,
	...UsuarioResolvers,
};

export default makeExecutableSchema({
	inheritResolversFromInterfaces: true,
	typeDefs,
	resolvers,
});
