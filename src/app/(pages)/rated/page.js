'use client'

import FilmCard from '@/components/Films/FilmCard'
import FilmsPage from '@/components/Films/FilmsPage'
import NavPanel from '@/components/NavPanel/NavPanel'
import { useSelector } from 'react-redux'
import styles from './ratedFilms.module.css'

export default function Rated() {
  const storageData = useSelector((data) => data.ratedData)
  const films = Object.values(storageData)

  return (
    <div className={styles.App}>
      <NavPanel />
      <div className={styles.ratedPageWrapper}>
        <h2 className={styles.ratedFilmsTitle}>Watched movies</h2>
        <div className={styles.filmsPage}>
          {films ? (
            films.map((film) => (
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
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  )
}
