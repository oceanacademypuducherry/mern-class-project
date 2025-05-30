import { createSlice } from "@reduxjs/toolkit";


const initialState = []

const batchSlice = createSlice({
    initialState,
    name: 'Batches',
    reducers: {
        setBatch: (state, action) => {
            state.push(action.payload)
        }

    }
})

export default batchSlice.reducer
export const { setBatch } = batchSlice.actions