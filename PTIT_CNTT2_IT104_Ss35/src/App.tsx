import React from 'react'
import Counter from './components/Counter'
import RandomList from './components/RandomList'
import ChangeTheme from './components/ChangeTheme'
import View from './components/View'
import Menu from './components/Menu'
import ChangeLanguage from './components/ChangeLanguage'
import UserList from './components/UserList'

export default function App() {
  return (
    <div>
      <Counter/>
      <hr />
      <RandomList/>
      <hr />
      <ChangeTheme/>
      <hr />
      <View/>
      <hr />
      <Menu/>
      <hr />
      <ChangeLanguage/>
      <hr />
      <UserList/>
    </div>
  )
}
