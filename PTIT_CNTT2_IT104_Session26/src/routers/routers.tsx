import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductDetail from "../pages/ProductDetail";
import Student from "../pages/Student";
import Student_B3 from "../pages/Student_B3";
import Login from "../pages/Login";
import PrivateRouter from "../pages/PrivateRouter";
import Account from "../pages/Account";
import Login_B6 from "../pages/Login_B6";
import Account_B6 from "../pages/Account_B6";
import ListProduct from "../pages/Bai/ListProduct";
import PD from "../pages/Bai/PD"
import Teams from "../pages/Teams";
import TeamsIndex from "../pages/TeamsIndex";
import Team from "../pages/Team";
import React, { lazy, Suspense } from "react"
import Loading from "../pages/Loading";
const LazyLoadComp = lazy(async () => {
  await new Promise((r) => setTimeout(r, 3000));
  return import("../pages/LazyLoadComp");
})


export const routers = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "product/:id", element: <ProductDetail/>},
            {path: "student/:name", element: <Student/>},
            {path: "student", element: <Student_B3/>},

            {path: "login", element: <Login/>},
            {element: <PrivateRouter/>, children: [
                {path: "account", element: <Account/>}
            ]},
            {path: "*", element: <Login />},

            {path: "logins", element: <Login_B6/>},
            {element: <PrivateRouter/>, children: [
                {path: "accounts", element: <Account_B6/>}
            ]},
            {path: "*", element: <Login_B6 />},

            {path: "teams", element: <Teams/>, children: [
                {index: true, element: <TeamsIndex/>},
                {path: ":teamId", element: <Team/>}
            ]},

            {path: "lazy", element: (
                <Suspense fallback={<Loading/>}>
                    <LazyLoadComp/>
                </Suspense>
            )}


        ]
    }
])