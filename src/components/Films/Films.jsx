import getFilms from '@/handlers/getFilms'
import { useEffect, useState } from 'react'
import styles from './Films.module.css'
import FilmsPage from './FilmsPage'

const Films = () => {
  const [films, setFilms] = useState('')

  useEffect(() => {
    getFilms(setFilms)
  }, [])

  return (
    <main className={styles.films}>
      <FilmsPage films={films} />
    </main>
  )
}

export default Films
