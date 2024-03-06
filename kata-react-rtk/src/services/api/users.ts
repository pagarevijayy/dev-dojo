import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type UserType = {
    id: string,
    name: string,
    email: string,
    number: string
};

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getUsers: builder.query<UserType[], void>({
            query: () => `users`,
        }),
        addUser: builder.mutation<UserType, Partial<UserType>>({
            query: (body) => ({
                url: `users`,
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const { useGetUsersQuery, useAddUserMutation } = usersApi