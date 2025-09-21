export interface ThemeState {
  dark: boolean;
}

const initialState: ThemeState = { dark: false };

export const TOGGLE_THEME = "TOGGLE_THEME";
export const toggleTheme = () => ({ type: TOGGLE_THEME });

type ThemeAction = ReturnType<typeof toggleTheme>;

export const themeReducer = (
  state = initialState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { dark: !state.dark };
    default:
      return state;
  }
};
