import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "../slice/BooksSlice";

export const store = configureStore({
  reducer: {
    books: booksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
