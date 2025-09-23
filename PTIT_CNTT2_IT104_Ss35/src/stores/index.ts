import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice"
import RandomList from "../components/RandomList";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        randomList: RandomList
    },
    devTools: true
})

export type RootState= ReturnType<typeof store.getState>
export type AppDipatch= typeof store.dispatch