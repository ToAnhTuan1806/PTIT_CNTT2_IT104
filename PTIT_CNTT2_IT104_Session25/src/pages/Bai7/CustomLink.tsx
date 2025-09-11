import React from "react";
import { Link, useLocation} from "react-router-dom";
import HomePage from "./HomePage";
import Notfound from "./Notfound";

export default function CustomLink() {
    const location= useLocation()
    const isHP= location.pathname==="/home-page"
  return (
    <div>
      <Link to="/home-page">Đến Home Page</Link>
      {isHP ? <HomePage/> : <Notfound/>}
    </div>
  );
}
