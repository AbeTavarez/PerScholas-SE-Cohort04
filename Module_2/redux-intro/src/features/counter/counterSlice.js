import { createSlice } from "@reduxjs/toolkit";

// Creates a slice for the counter state, reducers and actions.
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) =>{
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            console.log(action);
            state.value += action.payload;
        }
    }
});


// Exports the Actions
export const {increment, decrement, incrementByAmount} = counterSlice.actions;
// Exports the Reducer
export default counterSlice.reducer;