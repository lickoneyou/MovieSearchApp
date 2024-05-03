import React from 'react'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Movies</Link>
        </li>
        <li>
          <Link to='rated'>Rated movies</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
