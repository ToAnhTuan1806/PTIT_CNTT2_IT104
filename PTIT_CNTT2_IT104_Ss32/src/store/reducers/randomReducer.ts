export interface RandomState {
  numbers: number[];
}

const initialState: RandomState = { numbers: [] };
export const ADD_RANDOM = "ADD_RANDOM";

export const addRandom = (value: number) => ({
  type: ADD_RANDOM,
  payload: value,
});

type RandomAction = ReturnType<typeof addRandom>;

export const randomReducer = (
  state = initialState,
  action: RandomAction
): RandomState => {
  switch (action.type) {
    case ADD_RANDOM:
      return { numbers: [...state.numbers, action.payload] };
    default:
      return state;
  }
};
