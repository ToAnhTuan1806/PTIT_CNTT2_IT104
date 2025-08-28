import React, { useReducer, useState } from "react";
import "./Login.css";

interface State {
  username: string;
  password: string;
  errors: {
    username: string;
    password: string;
  };
}

type Action =
  | { type: "SET_USERNAME"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_ERROR"; payload: Partial<State["errors"]> }
  | { type: "RESET_ERROR" };

const initialState = {
  username: "",
  password: "",
  errors: {
    username: "",
    password: "",
  },
};

function reducer(state: State, action: Action):State {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_ERROR":
      return { ...state, errors: { ...state.errors, ...action.payload } };
    case "RESET_ERROR":
      return { ...state, errors: initialState.errors };
    default:
      return state;
  }
}

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [rememberMe, setRememberMe] = useState(false);

  const validate = () => {
    let isValid = true;
    dispatch({ type: "RESET_ERROR" });

    if (!state.username) {
      dispatch({
        type: "SET_ERROR",
        payload: { username: "Username cannot be blank!" },
      });
      isValid = false;
    }
    // } else if (!/\S+@\S+\.\S+/.test(state.username)) {
    //   dispatch({
    //     type: "SET_ERROR",
    //     payload: { username: "Invalid email format!" },
    //   });
    //   isValid = false;
    // }

    if (!state.password) {
      dispatch({
        type: "SET_ERROR",
        payload: { password: "Password cannot be blank!" },
      });
      isValid = false;
    } else if (state.password.length < 6) {
      dispatch({
        type: "SET_ERROR",
        payload: { password: "Password must be at least 6 characters!" },
      });
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      alert("Đăng nhập thành công!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="title">Welcome to</h2>
        <h1 className="subtitle">Secure Access Login</h1>
        <p className="desc">Facial Recognition Access Control System</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" value={state.username} onChange={(e) =>   dispatch({ type: "SET_USERNAME", payload: e.target.value }) } className={state.errors.username ? "error-input" : ""}/>
            {state.errors.username && (
              <p className="error-text">{state.errors.username}</p>
            )}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" value={state.password} onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
              className={state.errors.password ? "error-input" : ""}/>

            {state.errors.password && (<p className="error-text">{state.errors.password}</p>)}
          </div>

          <div className="options">
            <label>
              <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/>
              Remember Me
            </label>
            <a href="#" className="forgot">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Login →
          </button>

          <button type="button" className="google-btn">
            Login with Google
          </button>

          <p className="register">
            Don't have an account? <a href="">Register for an account</a>
          </p>
          <p className="footer-text">
            © FR‑ACS 2025 <br />
            Facial Recognition Access Control System
          </p>
        </form>
      </div>
    </div>
  )
}
