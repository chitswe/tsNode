import * as express from "express";
import sequelize from "./sequelize";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import * as bodyParser from "body-parser";
import schema from "./data/schema";
import resolvers from "./data/resolver";
import { setTimeout } from "timers";
const Schema = makeExecutableSchema({ typeDefs: schema, resolvers });
const app = express();
const port: number = Number(process.env.PORT) || 3031;
app.use(bodyParser.json());
app.use("/graphql", (req, res, nex) => {
  setTimeout(nex, 1000);
});
app.use("/graphql", graphqlExpress({ schema: Schema }));
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
app.use("*", (req, res) => {
  res.status(200).send("success");
});
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
  });
});
