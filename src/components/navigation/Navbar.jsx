import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const navLinks = [
    {
      id:0,
      url:'/',
      name:"Home"
    },
    {
      id:2,
      url:'/trailers',
      name:"Trailers"
    },
    {
      id:3,
      url:'/about',
      name:"About"
    },
  ]
  return (
    <div className="  flex justify-between w-full items-center">
      <div>
        <h1 className="text-white">gdhdbahb</h1>
      </div>
    
      

     <ul className="flex gap-8  text-white">
      {
        navLinks.map((link)=>{
          return(
            <Link to={`${link.url}`} key={link.id}>
                <p className="text-lg font-semibold">{link.name}</p>
            </Link>
          )
        })
      }
     </ul>
    </div>
  )
}

export default Navbar