import getFilms from '@/handlers/getFilms'
import { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'
import styles from './Films.module.css'
import FilmsPage from './FilmsPage'
import { useSelector } from 'react-redux'
import getQueryArray from '@/handlers/getQueryArray'

const Films = () => {
  const [films, setFilms] = useState('')
  const filters = useSelector((filters) => filters)

  useEffect(() => {
    getFilms(setFilms, getQueryArray(filters))
  }, [filters])

  return (
    <main className={styles.films}>
      {films ? <FilmsPage films={films} /> : <Spinner />}
    </main>
  )
}

export default Films
