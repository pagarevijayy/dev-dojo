import graphql from "graphql";
import axios from "axios";

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = graphql;

// const CompanyType = new GraphQLObjectType({
//     name: "Company",
//     fields: () => ({
//         id: { type: GraphQLString },
//         name: { type: GraphQLString },
//         description: { type: GraphQLString },
//         users: {
//             type: new GraphQLList(UserType),
//             resolve(parentValue, args) {
//                 return axios
//                     .get(
//                         `http://localhost:3000/companies/${parentValue.id}/users`,
//                     )
//                     .then((res) => res.data);
//             },
//         },
//     }),
// });

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        number: { type: GraphQLString },
        // age: { type: GraphQLInt },
        // company: {
        //     type: CompanyType,
        //     resolve(parentValue, args) {
        //         console.log("args", parentValue, args);
        //         return axios
        //             .get(
        //                 `http://localhost:3000/companies/${parentValue?.companyId}`,
        //             )
        //             .then((res) => res.data);
        //     },
        // },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                // resolve has the logic to return data - can be from db, third-party/external server
                return axios
                    .get(`http://localhost:3000/users`)
                    .then((res) => res.data);
            },
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                // resolve has the logic to return data - can be from db, third-party/external server
                return axios
                    .get(`http://localhost:3000/users/${args.id}`)
                    .then((res) => res.data);
            },
        },
        // company: {
        //     type: CompanyType,
        //     args: { id: { type: GraphQLString } },
        //     resolve(parentValue, args) {
        //         return axios
        //             .get(`http://localhost:3000/companies/${args.id}`)
        //             .then((res) => res.data);
        //     },
        // },
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                number: { type: new GraphQLNonNull(GraphQLString) },
                // age: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve(parentValue, { name, email, number }) {
                return axios
                    .post(`http://localhost:3000/users`, {
                        name,
                        email,
                        number
                    })
                    .then((res) => res.data);
            },
        },
        deleteUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parentValue, { id }) {
                return axios
                    .delete(`http://localhost:3000/users/${id}`)
                    .then((res) => res.data);
            },
        },
        editUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                number: { type: GraphQLString },
            },
            resolve(parentValue, { id, name, email, number }) {
                return axios
                    .patch(`http://localhost:3000/users/${id}`, {
                        name,
                        email,
                        number
                    })
                    .then((res) => res.data);
            },
        },
    },
});

export const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
