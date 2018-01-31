import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";
import { default as EmployeeGroup_resolver } from "../data/EmployeeGroup/resolver";
const Resolver = {
  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "Date time custom scalar type",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.toJSON(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value); // ast value is always in string format
      }
      return undefined;
    }
  }),
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value).dateOnly(); // value from the client
    },
    serialize(value: Date) {
      return value.toDateOnlyJSON(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value); // ast value is always in string format
      }
      return undefined;
    }
  }),
  Query: {
    hello: () => "world"
  },
  Mutation: {
    testDate: (_: object, props: any, context: any) => {
      const { d } = props;
      return (d as Date).timeAgo();
    }
  }
};

Object.assign(Resolver, EmployeeGroup_resolver.type);
Object.assign(Resolver.Query, EmployeeGroup_resolver.query);
Object.assign(Resolver.Mutation, EmployeeGroup_resolver.mutation);
export default Resolver;
