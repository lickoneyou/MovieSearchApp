import getFilms from '@/handlers/getFilms'
import { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'
import styles from './Films.module.css'
import FilmsPage from './FilmsPage'
import { useSelector } from 'react-redux'
import getQueryArray from '@/handlers/getQueryArray'
import ServerError from '../ServerError/ServerError'
import ControlledPagination from '../Pagination/Pagination'

const Films = ({ path }) => {
  const [films, setFilms] = useState('')
  const filters = useSelector((filters) => filters.query)

  useEffect(() => {
    getFilms(setFilms, getQueryArray(filters), path)
    console.log(films)
  }, [filters])

  return (
    <>
      {films === 'Server' ? (
        <ServerError></ServerError>
      ) : (
        <main className={styles.films}>
          {films ? <FilmsPage films={films} /> : <Spinner />}
          <ControlledPagination pages={films?.total_pages} />
        </main>
      )}
    </>
  )
}

export default Films
