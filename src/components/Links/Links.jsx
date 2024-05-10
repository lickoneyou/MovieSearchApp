'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './Links.module.css'
import { useRouter } from 'next/navigation'
import highlightingNavElements from '@/handlers/highlightingNavElements'

const Links = () => {
  const list = useRef()
  const router = useRouter()

  useEffect(() => {
    highlightingNavElements(list)
  }, [router])

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
