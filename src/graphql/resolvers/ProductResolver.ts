
   
import { IResolvers } from '@graphql-tools/utils';
import { Product, MutationProductArgs, QueryProductArgs } from '../generated';

export const ProductResolvers: IResolvers = {
  Query: {
    async product(_: void, args: QueryProductArgs): Promise<Product> {
      console.log('args', args);
      return {
        name: "toto",
        description: "my toto",
        price: 1.10,
        size: {
          width: 10,
          height: 11.1,
          lenght: 12.9
        },
        units: {
          distance: "cm",
          temperature: "c",
          weight: "kg"
        },
        weight: 12.22,
        fragile: false,
      }
    }
  },
  Mutation: {
    async product(_: void, args: MutationProductArgs): Promise<Product> {
      console.log('args', args);
      return {
        name: "toto",
        description: "my toto",
        price: 1.10,
        size: {
          width: 10,
          height: 11.1,
          lenght: 12.9
        },
        units: {
          distance: "cm",
          temperature: "c",
          weight: "kg"
        },
        weight: 12.22,
        fragile: false,
      }
    }
  }
};
