import * as express from "express";
import  User from "./models/user";
import { sequelize } from "./sequelize";
const app =  express();
const port: number = Number(process.env.PORT) ||  3030;
app.use((request, response) => {
    sequelize.sync()
    .then(() => {
        User.findAll()
        .then(value => {
            const result: string = JSON.stringify(value);
            response.status(200).send("success");
        });
    });
});
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});
