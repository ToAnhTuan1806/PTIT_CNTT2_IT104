// import Timer from "./components/BTTH/Timer"
import Company from "./components/Company"
import Exersice01 from "./components/Exersice01"
import Gender from "./components/Gender"
import LoginForm from "./components/LoginForm"
import Notification from "./components/Notification"
import ProductForm from "./components/ProductForm"
import RegisterFrom from "./components/RegisterFrom"
import Slogan from "./components/Slogan"
import TodoApp from "./components/Todo"

function App() {

  return (
    <>
      <Exersice01/>
      <hr />
      <Notification/>
      <hr />
      <Company/>
      {/* <Timer/> */}
      <hr />
      <Slogan/>
      <hr />
      <ProductForm/>
      <hr />
      <Gender/>
      <hr />
      <RegisterFrom/>
      <hr />
      <LoginForm/>
      <hr />
      <TodoApp/>
    </>
  )
}

export default App
