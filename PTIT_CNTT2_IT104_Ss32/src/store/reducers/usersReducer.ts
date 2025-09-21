// src/store/reducers/usersReducer.ts
export interface User {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

export interface UsersState {
  list: User[];
}

const initialState: UsersState = {
  list: [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      gender: "Nam",
      dateBirth: "20/11/2000",
      address: "Thanh Xuân, Hà Nội",
    },
    {
      id: 2,
      userName: "Nguyễn Thị B",
      gender: "Nữ",
      dateBirth: "15/05/2001",
      address: "Cầu Giấy, Hà Nội",
    },
  ],
};

type Action = { type: string; payload?: unknown };

export const usersReducer = (
  state = initialState,
  action: Action
): UsersState => {
  switch (action.type) {
    default:
      return state;
  }
};
