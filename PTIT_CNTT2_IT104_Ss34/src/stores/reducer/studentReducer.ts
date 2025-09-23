import type { Student } from "../../utils/types";

export const ADD_STUDENT = "ADD_STUDENT";
export const UPDATE_STUDENT = "UPDATE_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const SET_KEYWORD = "SET_KEYWORD";

export interface StudentState {
  list: Student[];
  keyword: string;
}

const initialState: StudentState = {
  list: [
    {
      id: 1001,
      fullName: "Nguyễn Văn A",
      age: 20,
      gender: true,
      dateOfBirth: "2005-01-01",
      placeOfBirth: "Hà Nội",
      address: "Hoàn Kiếm, Hà Nội",
    },
    {
      id: 1002,
      fullName: "Trần Thị B",
      age: 21,
      gender: false,
      dateOfBirth: "2004-05-15",
      placeOfBirth: "Đà Nẵng",
      address: "Hải Châu, Đà Nẵng",
    },
  ],
  keyword: "",
};

export function studentReducer(
  state: StudentState = initialState,
  action: any
): StudentState {
  switch (action.type) {
    case ADD_STUDENT:
      return { ...state, list: [...state.list, action.payload] };
    case UPDATE_STUDENT:
      return {
        ...state,
        list: state.list.map((s) =>
          s.id === action.payload.id ? action.payload : s
        ),
      };
    case DELETE_STUDENT:
      return {
        ...state,
        list: state.list.filter((s) => s.id !== action.payload),
      };
    case SET_KEYWORD:
      return { ...state, keyword: action.payload };
    default:
      return state;
  }
}
