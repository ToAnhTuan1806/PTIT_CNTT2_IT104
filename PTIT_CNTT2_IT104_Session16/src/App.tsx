import ButtonList from "./components/Bai3/ButtonList"
import ClickCounter from "./components/ClickCounter"
import LoginStatus from "./components/LoginStatus"
import SubjectList from "./components/SubjectList"
import UserForm from "./components/UserForm"

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
    </>
  )
}

export default App
