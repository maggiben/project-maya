import { IResolvers } from '@graphql-tools/utils'
import { ProductResolvers } from './resolvers/ProductResolver';

const resolverMap: IResolvers = ProductResolvers;
export default resolverMap;