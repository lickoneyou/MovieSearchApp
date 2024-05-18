'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './Links.module.css'
import { useRouter } from 'next/navigation'
import highlightingNavElements from '@/handlers/highlightingNavElements'
import { useDispatch } from 'react-redux'

const Links = () => {
  const list = useRef()
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    highlightingNavElements(list)
  }, [router])

  const deletedFilters = () => {
    dispatch({ type: 'RESET_FILTERS' })
  }

  const addCrumbs = (crumbs) => {
    dispatch({ type: 'ADD_CRUMBS', payload: crumbs })
  }

  return (
    <nav className={styles.nav}>
      <ul ref={list}>
        <li>
          <Link
            href="/"
            className={styles.link}
            onClick={() => {
              deletedFilters()
              addCrumbs({ crumbs: 'Movies', path: '/' })
            }}
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            href="/rated"
            className={styles.link}
            onClick={() => {
              deletedFilters()
              addCrumbs({ crumbs: 'Rated', path: '/rated' })
            }}
          >
            Rated movies
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Links
