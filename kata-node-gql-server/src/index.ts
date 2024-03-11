import express from "express";
import { createHandler } from "graphql-http/lib/use/express"
import schema from "./schema";
const app = express();
const expressPlayground = require('graphql-playground-middleware-express')
    .default


app.use(
    "/graphql",
    createHandler({
        schema: schema,
    }),
);

app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.listen(4000, () => {
    console.log("listening...");
});