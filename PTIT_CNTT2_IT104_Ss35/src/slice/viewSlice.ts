import { createSlice } from "@reduxjs/toolkit";

export type ViewMode = "list" | "grid";

type State = { mode: ViewMode };
const initialState: State = { mode: "list" };

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === "list" ? "grid" : "list";
    },
    setList(state) {
      state.mode = "list";
    },
    setGrid(state) {
      state.mode = "grid";
    },
  },
});

export const { toggleMode, setList, setGrid } = viewSlice.actions;
export default viewSlice.reducer;
