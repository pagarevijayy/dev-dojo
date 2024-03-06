import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import watchingReducer from './watching/watchingSlice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/api/pokemon'
import { usersApi } from '../services/api/users'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        watching: watchingReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([pokemonApi.middleware, usersApi.middleware]),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch