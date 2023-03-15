import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import SignIn from './pages/authentication/SignIn'
import SignUp from './pages/authentication/SignUp'
import { AppContext } from './context/AppContext'
import axios from 'axios'

function App() {
  //Global State
  const [movies,setMovies] = useState([])

  const headers={
         'Authorization':
         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzU3YTdjMDNiN2Q2YzJiYmI4OWMyYzljODZiMjcwZSIsInN1YiI6IjY0MGUyNTFhZWRlMWIwMDBkOTc1NDE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gizTyQELHGPKTtCxdceD-yoWMF_RUQVcFrqjYcrYa1k'
  }

  useEffect(()=>{
    async function fetchDB(){
      await axios.get('https://api.themoviedb.org/3/movie/now_playing',{headers})
      .then((res)=>{
          setMovies(res.data.results)
      })
    }
    fetchDB()
  })

  return (
      <AppContext.Provider value={movies}>
        <main>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='Sign-in' element={<SignIn/>}/>
            <Route path='Sign-up' element={<SignUp/>}/>
          </Routes>
        </main>
      </AppContext.Provider>
  )
}

export default App