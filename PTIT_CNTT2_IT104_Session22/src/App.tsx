import React from 'react'
import Buttons from './components/Buttons'
import 'bootstrap/dist/css/bootstrap.min.css'
import Inputs from './components/Inputs'
import Cards from './components/Cards'
import Dropdowns from './components/Dropdowns'
import Alerts from './components/Alerts'
import Spinners from './components/Spinners'
import Toasts from './components/Toasts'
import Forms from './components/Forms'

export default function App() {
  return (
    <div>
      <Buttons/>
      <hr />
      <Inputs/>
      <hr />
      <Cards/>
      <hr />
      <Dropdowns/>
      <hr />
      <Alerts/>
      <hr />
      <Spinners/>
      <hr />
      <Toasts/>
      <hr />
      <Forms/>
    </div>
  )
}
