import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/Ex1/About";
import Home from "../pages/Ex1/Home";
import Contact from "../pages/Ex1/Contact";
import ProductList from "../pages/Ex2/ProductList";
import ProductDetail from "../pages/Ex2/ProductDetail";
import TaskList from "../pages/Ex3/TaskList";
import TaskDetail from "../pages/Ex3/TaskDetail";
import ProductList4 from "../pages/Ex4/ProductList4";
import NotFound from "../pages/NotFound";
import BlogLayout from "../components/BlogLayout";
import Posts from "../pages/Ex5/Posts";
import PostsDetail from "../pages/Ex5/PostsDetail";

export const routers = createBrowserRouter([
    {
        path: "/", 
        element: <App/>,
        children: [
            {path: "", element:<Home/>},
            {path: "about", element: <About/>},
            {path: "contact", element: <Contact/>},


            {path: "products", element: <ProductList/>},
            {path: "products/:id", element: <ProductDetail/>},

            {path: "task", element: <TaskList/>},
            {path: "task/:id", element: <TaskDetail/>},

            {path: "productlist", element: <ProductList4/>},

            {path: "blog", element: <BlogLayout/>, children: [
                {path: "posts", element: <Posts/>},
                {path: "posts/:id", element: <PostsDetail/>}
            ]},

            {path: "*", element: <NotFound/>}
        ]
    } 
])