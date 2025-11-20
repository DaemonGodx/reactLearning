import React from 'react'
import { useState } from 'react'
import './App.css'
import Login from './componenets/login/login.jsx'
import Profile from './componenets/profile/profile.jsx'
import UserContextProvider from './useContext/UserContextProvider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvider >
    <Login />
    <Profile />
    </UserContextProvider>
      
    </>
  )
}

export default App
