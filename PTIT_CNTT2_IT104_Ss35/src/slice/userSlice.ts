import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: number;
  username: string;
  favorite: boolean;
};

type UserState = {
  list: User[];
};

const initialState: UserState = {
  list: [
    { id: 1, username: "Nguyễn Văn A", favorite: false },
    { id: 2, username: "Nguyễn Văn B", favorite: false },
    { id: 3, username: "Nguyễn Văn C", favorite: false },
    { id: 4, username: "Nguyễn Văn D", favorite: false },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      const id = action.payload;
      const user = state.list.find((u) => u.id === id);
      if (user) {
        user.favorite = !user.favorite;
      }
    },
  },
});

export const { toggleFavorite } = userSlice.actions;
export default userSlice.reducer;
