import getFilms from '@/handlers/getFilms'
import { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'
import styles from './Films.module.css'
import FilmsPage from './FilmsPage'
import { useSelector } from 'react-redux'
import getQueryArray from '@/handlers/getQueryArray'
import ServerError from '../ServerError/ServerError'

const Films = ({ path }) => {
  const [films, setFilms] = useState('')
  const filters = useSelector((filters) => filters)

  useEffect(() => {
    getFilms(setFilms, getQueryArray(filters), path)
  }, [filters])

  return (
    <>
      {films === 'Server' ? (
        <ServerError></ServerError>
      ) : (
        <main className={styles.films}>
          {films ? <FilmsPage films={films} /> : <Spinner />}
        </main>
      )}
    </>
  )
}

export default Films
