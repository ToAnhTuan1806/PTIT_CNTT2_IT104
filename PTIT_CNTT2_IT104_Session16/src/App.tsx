import ButtonList from "./components/Bai3/ButtonList"
import Shop from "./components/Bai7/Shop"
import ClickCounter from "./components/ClickCounter"
import LoginStatus from "./components/LoginStatus"
import SubjectList from "./components/SubjectList"
import ThemeSwitcher from "./components/ThemeSwitcher"
import UserForm from "./components/UserForm"
import "./components/Bai7/Shop.css"

function App() {

  return (
    <>
     <SubjectList/>
     <hr />
     <LoginStatus/>
     <hr />
     <ButtonList/>
     <hr />
     <ClickCounter/>
     <hr />
     <UserForm/>
     <hr />
     <ThemeSwitcher/>
     <hr />
     <Shop/>
    </>
  )
}

export default App
