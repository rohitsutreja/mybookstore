import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar"style={{color: "aqua"}}>
        <div className="title" style ={{color:"black", padding: "2px", borderRadius: "5px", fontSize: "30px"}}>thebookSTORE</div>
        <ul className ="navlist" style ={{listStyle: "none"}}>
            <li><Link className = "navitem"  to='/home'>Home</Link></li>
            <li><Link  className = "navitem"  to='/books'>Books</Link></li>
            <li><Link  className = "navitem"   to='/about'>About</Link></li>
            <li><Link className = "navitem"  to='/signup'>Sign Up</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
