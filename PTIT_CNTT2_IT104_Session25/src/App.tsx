import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./pages/Bai6/Header";
import CustomLink from "./pages/Bai7/CustomLink";

export default function App() {
  return (
    <div>
      <Link to="/bai1/home" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/bai1/about" style={{ marginRight: "10px" }}>
        About
      </Link>
      <Link to="/bai1/contact">Contact</Link>
      <hr />

      <Link to="/bai2/contacts">Contacts</Link>
      <hr />
      <Header></Header>
      <hr />
      <CustomLink />
      <hr />
      <Link to="/users">Danh sách Users</Link>
      <hr />

      <Link to="/register" style={{ marginRight: "10px" }}>Đăng ký</Link>
      <Link to="/login">Đăng nhập</Link>
      <Outlet></Outlet>
    </div>
  );
}
