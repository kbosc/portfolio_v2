import { createSlice, configureStore } from "@reduxjs/toolkit";


const clickSlice = createSlice({
    name: "click",
    initialState: {
        clickTrigger: false,
    },
    reducers: {
        clickStateChange: (state, action) => {
            console.log(state);
            state = action
            console.log(state);
        }
    }
})

export const { clickStateChange } = clickSlice.actions

export const store = configureStore({
    reducer: {
        employee: clickSlice.reducer
    },
})

