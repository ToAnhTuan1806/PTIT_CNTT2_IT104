import { useSelector } from "react-redux";
import Profile from "./components/Profile";
import ListUser from "./components/ListUser";
import Counter from "./components/Counter";
import RandomNumber from "./components/RandomNumber";
import ChangeState from "./components/ChangeState";
import ThemeBox from "./components/ThemeBox";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import type { RootState } from "./store/reducers";
import Login from "./components/Login";
import Register from "./components/Register";

function Home() {
  const loggedIn = useSelector((s: RootState) => s.auth.loggedIn);
  console.log("User logged in:", loggedIn);

  return (
    <div>
      <p>
        <Link to="/register">Đăng ký</Link> | <Link to="/login">Đăng nhập</Link>
      </p>
      <Profile />
      <hr />
      <ListUser />
      <hr />
      <Counter />
      <hr />
      <RandomNumber />
      <hr />
      <ChangeState />
      <hr />
      <ThemeBox />
      <hr />
      <p>
        <Link to="/register">Đăng ký</Link> |{" "}
        <Link to="/login">Đăng nhập</Link>
      </p>
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
