import { createSlice, type PayloadAction,  } from "@reduxjs/toolkit";

const initialState= {
    value: 0
}

const counterSlice= createSlice({
    name: "counter",
    initialState,
    reducers:{
        increase: (state)=> {
            state.value +=1
        },
        decrement: (state)=> {
            state.value -=1
        },
        reset: (state)=> {
            state.value=0
        },
        incrementByAmount: (state, action: PayloadAction<number>)=> {
            state.value += action.payload
        }
    }

})
export default counterSlice.reducer
export const {increase, decrement, reset, incrementByAmount}= counterSlice.actions