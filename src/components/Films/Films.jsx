import getFilms from '@/handlers/getFilms'
import { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'
import styles from './Films.module.css'
import FilmsPage from './FilmsPage'

const Films = () => {
  const [films, setFilms] = useState('')

  useEffect(() => {
    getFilms(setFilms)
  }, [])

  return (
    <main className={styles.films}>
      {films ? <FilmsPage films={films} /> : <Spinner />}
    </main>
  )
}

export default Films
