import React from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (

    <UserContextProvider>
      <h1>hey yash</h1>
      <Login  />
      <Profile city={"orai"} />

    </UserContextProvider>

  )
}

export default App
