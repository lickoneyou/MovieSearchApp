'use client'

import FilmCard from '@/components/Films/FilmCard'
import NavPanel from '@/components/NavPanel/NavPanel'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import styles from './ratedFilms.module.css'
import img from '../../../img/notrate.png'
import { Button } from '@mantine/core'
import { useRouter } from 'next/navigation'
import _ from 'lodash'
import ControlledPagination from '@/components/Pagination/Pagination'
import SearchForm from '@/components/ControlPanel/SearchForm'

export default function Rated() {
  const storageData = useSelector((data) => data.ratedData)
  const searchData = useSelector((data) => data.query.query)
  const dispatch = useDispatch()
  const router = useRouter()
  const filteredData = Object.values(storageData).filter((film) =>
    film.title.toLowerCase().includes(searchData.toLowerCase()),
  )
  const chunkFilms = _.chunk(filteredData, 4)
  const page = useSelector((data) => data.query.page)
  const films = chunkFilms[page - 1]

  return (
    <div className={styles.App}>
      <NavPanel />
      {chunkFilms.length ? (
        <div className={styles.ratedPageWrapper}>
          <div className={styles.searchWrapper}>
            <h2 className={styles.ratedFilmsTitle}>Rated movies</h2>
            <SearchForm isRated={true} />
          </div>
          <div className={styles.filmsPage}>
            {films.map((film) => (
              <FilmCard
                key={film.id}
                imgSrc={film.imgSrc}
                title={film.title}
                id={film.id}
                releaseDate={film.releaseDate}
                voteAverage={film.voteAverage}
                voteCount={film.voteCount}
                genreIds={film.genreIds}
                rValue={film.rValue}
              />
            ))}
          </div>
          <ControlledPagination pages={chunkFilms.length} position="center" />
        </div>
      ) : (
        <div className={styles.notrateWrapper}>
          <Image src={img} alt="not films" />
          <h3 className={styles.notrateTitle}>
            You haven't rated any films yet
          </h3>
          <Button
            onClick={() => {
              dispatch({ type: 'RESET_FILTERS' })
              router.push('/')
            }}
            className={styles.notrateBtn}
          >
            Find movies
          </Button>
        </div>
      )}
    </div>
  )
}
