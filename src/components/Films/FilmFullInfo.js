'use client'

import getFilmInfo from '@/handlers/getFilmInfo'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'
import FilmCard from './FilmCard'
import styles from './FilmFullInfo.module.css'

const FilmFullInfo = () => {
  const [filmInfo, setFilminfo] = useState({})
  const id = usePathname()

  useEffect(() => {
    getFilmInfo(setFilminfo, id)
  }, [])

  return (
    <div className={styles.filmInfoWrapper}>
      {filmInfo.id ? (
        <>
          <div className={styles.filmFullInfoCrumbs}>qwerqwewqs</div>
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
            w="250"
            h="352"
          />
          <div>
            {filmInfo.video ? (
              <div>
                <h2>Trailer</h2>
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
