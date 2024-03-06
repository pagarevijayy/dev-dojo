import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import watchingReducer from './watching/watchingSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        watching: watchingReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch