import { configureStore } from "@reduxjs/toolkit"
import taskSlice from "../slice/taskSlice"

export const store= configureStore({
    reducer: {
        task: taskSlice,
    },
    devTools: true
})

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch