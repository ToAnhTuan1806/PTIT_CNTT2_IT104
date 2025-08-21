// import React from "react"
// import Exercises01 from "./components/Exercises01"
// import Exercises02 from "./components/Exercises02"
// import Exercises03 from "./components/Exercises03"
// import Parent_Comp from "./components/Bai4/Parent_Comp"
// import ParentCmd from "./components/Bai5/ParentCpd"
// import ListPost from "./components/Bai6/ListPost"



// // function App() {

// //   return (
// //     <>
// //       <Exercises01/>
// //       <Exercises02/>
// //       <Exercises03/>
// //       <Parent_Comp/>
// //       <ParentCmd/>
// //       <ListPost/>
// //     </>
// //   )
// // }

import React, { Component } from "react";
import Exercises01 from "./components/Exercises01";
import Exercises02 from "./components/Exercises02";
import Exercises03 from "./components/Exercises03";
import Parent_Comp from "./components/Bai4/Parent_Comp";
import ParentCmd from "./components/Bai5/ParentCpd";
import ListPost from "./components/Bai6/ListPost";
import Todolist from "./components/Todolist";
import UpdateState from "./components/UpdateState";
import Input from "./components/Input";

interface State {
  theme: "Sáng" | "Tối";
  language: "Tiếng Anh" | "Tiếng Việt";
}

export default class App extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      theme: "Sáng",
      language: "Tiếng Anh"
    };
  }

  render() {
    const { theme, language } = this.state;

    const backgroundColor = theme === "Sáng" ? "#ffffff" : "#000000";
    const textColor = theme === "Sáng" ? "#000000" : "#ffffff";

    return (
      <div style={{ backgroundColor, color: textColor}}>
        <p><b>Nền: {theme}</b></p>
        <p><b>Ngôn ngữ: {language}</b></p>

        {theme === "Sáng" && language === "Tiếng Anh"}
        {theme === "Tối" && language === "Tiếng Việt"}

        <button
          onClick={() =>this.setState({ theme: theme === "Sáng" ? "Tối" : "Sáng" })}>
          Đổi theme
        </button>

        <button style={{ marginLeft: "10px" }}
          onClick={() =>this.setState({ language: language === "Tiếng Anh" ? "Tiếng Việt" : "Tiếng Anh" })}>
          Đổi language
        </button>

        <Exercises01 />
        <Exercises02 />
        <Exercises03 />
        <Parent_Comp />
        <ParentCmd />
        <ListPost />
        <Todolist/>
        <UpdateState/>
        <Input/>
        
      </div>
    );
  }
}
