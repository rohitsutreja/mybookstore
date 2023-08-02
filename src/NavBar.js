import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav style={{color: "aqua"}}>
        <ul style ={{listStyle: "none"}}>
            <li style ={{backgroundColor: "white" ,color:"black", padding: "5px", borderRadius: "5px"}}>BOOKSTORE</li>
            <li><Link style ={{textDecoration: "none", color:"white"}} to='/home'>Home</Link></li>
            <li><Link style ={{textDecoration: "none", color:"white"}} to='/books'>Books</Link></li>
            <li><Link  style ={{textDecoration: "none", color:"white"}} to='/about'>About</Link></li>
            <li><Link style ={{textDecoration: "none" ,color:"white"}} to='/login'>Login</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
