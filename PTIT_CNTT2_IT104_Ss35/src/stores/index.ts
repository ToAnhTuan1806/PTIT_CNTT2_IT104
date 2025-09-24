import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice"
import randomListSlice from "../slice/randomListSlice"
import themeSlice from "../slice/themeSlice"
import viewSlice from "../slice/viewSlice"
import menuSlice from "../slice/menuSlice"
import languageSlice from "../slice/languageSlice"
import userSlice from "../slice/userSlice"

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        random: randomListSlice,
        theme: themeSlice,
        view: viewSlice,
        menu: menuSlice,
        language: languageSlice,
        user: userSlice
    },
    devTools: true
})

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch