import { createSlice } from "@reduxjs/toolkit";

type State = { items: number[] };
const initialState: State = { items: [] };

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomListSlice = createSlice({
  name: "randomList",
  initialState,
  reducers: {
    generate(state) {
      state.items = Array.from({ length: 4 }, () => randInt(1, 10));
    },
  },
});

export const { generate } = randomListSlice.actions;
export default randomListSlice.reducer;
