import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import SignIn from './pages/authentication/SignIn'
import SignUp from './pages/authentication/SignUp'

function App() {
  return (
    <main className='bg-red-500 w-screen h-screen'>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
        <Route path='sign-up' element={<SignUp/>}/>
      </Routes>
    </main>
  )
}

export default App