'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './Links.module.css'

const Links = () => {
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
    <nav className={styles.nav}>
      <ul ref={list}>
        <li>
          <Link href="/" className={styles.link}>
            Movies
          </Link>
        </li>
        <li>
          <Link href="/rated" className={styles.link}>
            Rated movies
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Links
