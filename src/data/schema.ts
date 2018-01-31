import {default as EmployeeGroup_schema } from "./EmployeeGroup/schema";
const Schema: string = `
scalar DateTime
scalar Date

type error{
    key:String
    message:String!
}

type pagination{
    page:Int!
    pageSize:Int!
    hasMore:Boolean!
    totalRows:Int!
    totalPages:Int!
}

input paginationCriteria{
    page:Int!
    pageSize:Int!
}

input criteria{
    pagination:paginationCriteria!
    orderBy:[[String]]!
}

input DateRange{
    From:Date
    To:Date
}

${EmployeeGroup_schema.type}

type Query {
    hello:String
    ${EmployeeGroup_schema.query}
}
type Mutation {
    testDate(d:Date):String
    ${EmployeeGroup_schema.mutation}
}

schema{
    query:Query,
    mutation:Mutation
}
`;

export default Schema;