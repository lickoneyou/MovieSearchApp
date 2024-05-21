'use client'

import getFilmInfo from '@/handlers/getFilmInfo'
import getTrailer from '@/handlers/getTrailer'
import localStorageDataChecker from '@/handlers/localStorageDataChecker'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../Spinner/Spinner'
import Bredcr from './BreadCrumbs'
import FilmCard from './FilmCard'
import styles from './FilmFullInfo.module.css'
import Production from './Production'
import Trailer from './Trailer'

const FilmFullInfo = () => {
  const [filmInfo, setFilminfo] = useState({})
  const id = usePathname()
  const localStorageData = useSelector((data) => data.ratedData)
  const crumbs = useSelector((data) => data.breadcrumbs)
  const [trailerSrc, setTrailerSrc] = useState('')

  useEffect(() => {
    getFilmInfo(setFilminfo, id)
    getTrailer(id, setTrailerSrc)
  }, [])

  return (
    <div className={styles.filmInfoWrapper}>
      {filmInfo.id ? (
        <>
          <Bredcr
            page={crumbs}
            filmTitle={filmInfo.title}
            filmPath={filmInfo.id}
            className={styles.crumbs}
          />
          <FilmCard
            imgSrc={filmInfo.poster_path}
            title={filmInfo.title}
            id={filmInfo.id}
            releaseDate={filmInfo.release_date}
            voteAverage={filmInfo.vote_average}
            voteCount={filmInfo.vote_count}
            genresArr={filmInfo.genres}
            duration={filmInfo.runtime}
            premiere={filmInfo.release_date}
            budget={filmInfo.budget}
            grossWorldwide={filmInfo.revenue}
            w="265"
            rValue={localStorageDataChecker(
              filmInfo,
              localStorageData,
              'rValue',
            )}
            isFullInfo={true}
          />
          <div className={styles.filmCard}>
            {trailerSrc ? (
              <div className={styles.filmCardConteiner}>
                <h2 className={styles.title}>Trailer</h2>
                <Trailer src={trailerSrc} />
              </div>
            ) : (
              false
            )}
            {filmInfo.overview ? (
              <div className={styles.filmCardConteiner}>
                <h2 className={styles.title}>Description</h2>
                <p>{filmInfo.overview}</p>
              </div>
            ) : (
              false
            )}
            {filmInfo.production_companies.filter(
              (company) => company.logo_path,
            ).length ? (
              <div className={styles.filmCardConteiner}>
                <h2 className={styles.title}>Production</h2>
                <div>
                  {filmInfo.production_companies.map((company) => {
                    if (company.logo_path) {
                      return (
                        <Production
                          id={company.id}
                          path={company.logo_path}
                          alt={company.name}
                          key={company.id}
                        />
                      )
                    }
                  })}
                </div>
              </div>
            ) : (
              false
            )}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default FilmFullInfo
