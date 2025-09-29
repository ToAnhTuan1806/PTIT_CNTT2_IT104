import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Book } from "../components/types";

const initialState: Book[] = [];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setAll(_state, action: PayloadAction<Book[]>) {
      return action.payload;
    },

    add(state, action: PayloadAction<Book>) {
      state.unshift(action.payload);
    },

    update(state, action: PayloadAction<Book>) {
      const i = state.findIndex((b) => b.id === action.payload.id);
      if (i >= 0) state[i] = action.payload;
    },

    remove(state, action: PayloadAction<number>) {
      const i = state.findIndex((b) => b.id === action.payload);
      if (i >= 0) state.splice(i, 1);
    },
  },
});

export const { setAll, add, update, remove } = booksSlice.actions;
export default booksSlice.reducer;
