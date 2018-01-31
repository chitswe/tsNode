import * as express from "express";
import { sequelize } from "./sequelize";
import * as bodyParser from "body-parser";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import Schema from "./data/schema";
import Resolver from "./data/resolver";
import "./common/date.extensions";
const app =  express();
const port: number = Number(process.env.PORT) ||  3030;
const schema = makeExecutableSchema({ typeDefs: Schema, resolvers: Resolver });
app.use(bodyParser.json());
app.use("/graphql", graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
console.log(".....");
sequelize.sync()
.then(() => {
    console.log("then ....");
    app.listen(port, () => {
        console.log(`Server is running on port : ${port}`);
    });
}).catch(e => {
    console.log(e.message);
});
