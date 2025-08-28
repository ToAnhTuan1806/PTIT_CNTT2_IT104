
import ColorPicker from './components/ColorPicker'
import Increase from './components/Increase'
import InputRadio from './components/InputRadio'
import InputText from './components/InputText'
import Login from './components/Login'
import LoginForm from './components/LoginForm'
import TodoList from './components/TodoList'
import UserList from './components/UserList'

function App() {

  return (
    <>
      <Increase/>
      <hr />
      <UserList/>
      <hr />
      <LoginForm/>
      <hr />
      <ColorPicker/>
      <hr />
      <InputText/>
      <hr />
      <InputRadio/>
      <hr />
      <TodoList/>
      <hr />
      <Login/>
    </>
  )
}

export default App
