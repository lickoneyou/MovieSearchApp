'use client'

import FilmCard from '@/components/Films/FilmCard'
import NavPanel from '@/components/NavPanel/NavPanel'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import styles from './ratedFilms.module.css'
import img from '../../../img/notrate.png'
import { Button } from '@mantine/core'
import { useRouter } from 'next/navigation'
import _ from 'lodash'
import ControlledPagination from '@/components/Pagination/Pagination'

export default function Rated() {
  const storageData = useSelector((data) => data.ratedData)
  const router = useRouter()
  const chunkFilms = _.chunk(Object.values(storageData), 4)
  const page = useSelector((data) => data.query.page)
  let films = chunkFilms[page - 1]

  return (
    <div className={styles.App}>
      <NavPanel />
      {films.length ? (
        <div className={styles.ratedPageWrapper}>
          <h2 className={styles.ratedFilmsTitle}>Watched movies</h2>
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
          <ControlledPagination pages={chunkFilms.length} position='center'/>
        </div>
      ) : (
        <div className={styles.notrateWrapper}>
          <Image src={img} />
          <h3 className={styles.notrateTitle}>
            You haven't rated any films yet
          </h3>
          <Button
            onClick={() => router.push('/')}
            className={styles.notrateBtn}
          >
            Find movies
          </Button>
        </div>
      )}
    </div>
  )
}
