import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import watchingReducer from './watching/watchingSlice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/api/pokemon'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        watching: watchingReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch