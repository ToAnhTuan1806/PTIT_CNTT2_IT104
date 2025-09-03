import Counter from "./components/Counter"
import InputValidate from "./components/InputValidate"
import Modal from "./components/Modal"
import PageTitle from "./components/PageTitle"
import Timer from "./components/Timer"
import UserForm from "./components/UserForm"
import UserProfile from "./components/UserProfile"
import Welcome from "./components/Welcome"


function App() {


  return (
    <>
      <InputValidate/>
      <hr />
      <UserProfile/>
      <hr />
      <Welcome/>
      <hr />
      <PageTitle/>
      <hr />
      <Timer/>
      <hr />
      <Modal/>
      <hr />
      <Counter/>
      <hr />
      <UserForm/>
    </>
  )
}

export default App
