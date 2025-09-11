import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Bai1/Home";
import About from "../pages/Bai1/About";
import Contact from "../pages/Bai1/Contact";
import Contacts from "../pages/Bai2/Contacts";
import NotFound from "../pages/Bai5/NotFound";
import Homes from "../pages/Bai6/Homes";
import Product from "../pages/Bai6/Product";
import Detail from "../pages/Bai6/Detail";
import HomePage from "../pages/Bai7/HomePage";
import ListUser from "../pages/Bai8/ListUser";
import UserDetail from "../pages/Bai8/UserDetail";
import Register from "../pages/Bai9/Register";
import Login from "../pages/Bai9/Login";
import CustomLink from "../pages/Bai7/CustomLink";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "bai1/home", element: <Home/> },
      { path: "bai1/about", element: <About/> },
      { path: "bai1/contact", element: <Contact/> },

      { path: "bai2/contacts", element: <Contacts/> },

      { path: "*", element: <NotFound/> },

      { path: "bai6/home", element: <Homes /> },
      { path: "bai6/product", element: <Product /> },
      { path: "bai6/detail", element: <Detail /> },

      { path: "*", element: <CustomLink /> },

      {path: "users", element: <ListUser/>},
      {path: "users/:id", element: <UserDetail/>},

      { path: "register", element: <Register/>},
      {path: "login", element: <Login/>}
    ],
  },
]);
