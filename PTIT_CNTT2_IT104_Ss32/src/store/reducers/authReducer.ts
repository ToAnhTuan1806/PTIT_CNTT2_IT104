export interface Account {
  email: string;
  password: string;
}

export interface AuthState {
  registered: Account | null;  
  loggedIn: string | null;    
}
const initialState: AuthState = { registered: null, loggedIn: null };
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const registerSuccess = (acc: Account) => ({
  type: REGISTER_SUCCESS,
  payload: acc,
});

export const loginSuccess = (email: string) => ({
  type: LOGIN_SUCCESS,
  payload: email,
});

type AuthAction =
  | ReturnType<typeof registerSuccess>
  | ReturnType<typeof loginSuccess>;

export const authReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, registered: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, loggedIn: action.payload };
    default:
      return state;
  }
};
