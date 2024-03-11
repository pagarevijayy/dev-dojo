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

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        number: { type: GraphQLString },
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

/*
Playground Queries:

query users {
  users{
    id,
    name,
    email
  }
}


query users {
  users(id: "3"){
    id,
    name,
    email
  }
}

mutation {
  deleteUser(id: "a374"){
    id,
    name,
    email
  }
}

mutation {
  editUser(id: "8d47", name: "Vishal Yadav", email:"vishal@gmail.com"){
    id,
    name,
    email
  }
}

mutation {
  addUser( name: "Manpreet Singh", email:"mannu@gmail.com", number:"8882384324"){
    id,
    name,
    email
  }
}


*/