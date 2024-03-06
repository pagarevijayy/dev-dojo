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
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query<UserType[], void>({
            query: () => `users`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Users' as const, id })),
                        { type: 'Users', id: 'LIST' },
                    ]
                    : [{ type: 'Users', id: 'LIST' }],
        }),
        addUser: builder.mutation<UserType, Partial<UserType>>({
            query: (body) => ({
                url: `users`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }],
        }),
    }),
})

export const { useGetUsersQuery, useAddUserMutation } = usersApi