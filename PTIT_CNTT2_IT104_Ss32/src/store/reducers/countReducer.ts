export interface CountState {
  value: number;
}

const initialState: CountState = { value: 0 };

export const INCREMENT = "counter/INCREMENT"
export const DECREMENT = "counter/DECREMENT"

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

type CountAction = ReturnType<typeof increment> | ReturnType<typeof decrement>;

export const countReducer = (
  state = initialState,
  action: CountAction
): CountState => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
