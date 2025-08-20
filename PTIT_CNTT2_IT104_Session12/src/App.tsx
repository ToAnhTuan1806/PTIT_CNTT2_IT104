
import Calculation from './components/Calculation'
import ListCourse from './components/ListCourse'
import UserInfo from './components/UserInfo'
import ColorBox from './components/ColorBox'
import FormatName from './components/FormatName'
import AdminIndex from './components/Adminlndex'
import UserLayout from './components/UserLayout'
import UserTable from './components/UserTable'
import TodoListIndex from './components/Bai9/TodoListIndex'
import ListStudent from './components/Bai10/ListStudent'


function App() {


  return (
    <>
    <div style={{gap: "100px", display: "flex", flexDirection: "column"}}>
      <ListCourse/>
      <Calculation/>
      <UserInfo/>

      <div>
      <ColorBox color="red" />
      <ColorBox color="blue" />
      <ColorBox color="green" />
    </div>
    {}
      <FormatName/>
      <AdminIndex/>

      <UserLayout/>

      <UserTable/>

    <TodoListIndex/>

    <ListStudent/>

    </div>
    </>
  )
}

export default App
