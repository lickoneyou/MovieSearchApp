import React, { useEffect, useRef } from 'react'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  const list = useRef()

  useEffect(() => {
    const listItem = list.current.childNodes
    listItem.forEach((list) => {
      if (window.location.href === list.firstElementChild.href) {
        list.classList.add(styles.active)
      } else {
        list.classList.remove(styles.active)
      }
    })
  }, [window.location.href])

  return (
    <nav>
      <ul ref={list}>
        <li>
          <Link to="/" className={styles.link}>Movies</Link>
        </li>
        <li>
          <Link to="/rated" className={styles.link}>Rated movies</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
