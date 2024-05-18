import localStorageDataChecker from '@/handlers/localStorageDataChecker'
import { useSelector } from 'react-redux'
import FilmCard from './FilmCard'
import styles from './FilmsPage.module.css'
import img from '../../img/notsearch.png'
import Image from 'next/image'

const FilmsPage = ({ films }) => {
  const results = films.results
  const localStorageData = useSelector((data) => data.ratedData)

  return (
    <div className={styles.filmsPage}>
      {results.length ? (
        results.map((film) => (
          <FilmCard
            key={film.id}
            imgSrc={film.poster_path}
            title={film.title}
            id={film.id}
            releaseDate={film.release_date}
            voteAverage={film.vote_average}
            voteCount={film.vote_count}
            genreIds={film.genre_ids}
            rValue={localStorageDataChecker(film, localStorageData, 'rValue')}
          />
        ))
      ) : (
        <div className={styles.notsearchWrapper}>
          <Image src={img} />
          <h3 className={styles.notsearchTitle}>
            We don't have such movies, look for another one
          </h3>
        </div>
      )}
    </div>
  )
}

export default FilmsPage
