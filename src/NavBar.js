import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>BOOKSTORE</li>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/projects'>Project</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
