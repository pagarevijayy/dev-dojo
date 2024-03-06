import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type watchingState = {
    show: string
}

const initialState: watchingState = {
    show: 'Pokemon'
}

export const watchingSlice = createSlice({
    name: "watching",
    initialState: initialState,
    reducers: {
        currentShow: (state, action: PayloadAction<string>) => {
            state.show = action.payload
        }
    }
})

export const { currentShow } = watchingSlice.actions
export default watchingSlice.reducer