import express from "express";
import { createHandler } from "graphql-http/lib/use/express"
import graphqlPlaygroundHtml from "graphql-playground-html";
import { schema } from "./schema.js";

const app = express();

app.use(
    "/graphql",
    createHandler({
        schema: schema,
    }),
);

// gql playground
const graphqlPlayground = function (
    options: graphqlPlaygroundHtml.MiddlewareOptions
) {
    return function (req, res, next) {
        res.setHeader("Content-Type", "text/html");
        const playground = graphqlPlaygroundHtml.renderPlaygroundPage(options);
        res.write(playground);
        res.end();
    };
};

app.get('/playground', graphqlPlayground({ endpoint: '/graphql' }));

app.listen(4000, () => {
    console.log("listening on port 4000...");
});