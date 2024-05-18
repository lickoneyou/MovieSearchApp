import localStorageDataChecker from '@/handlers/localStorageDataChecker'
import { useSelector } from 'react-redux'
import FilmCard from './FilmCard'
import styles from './FilmsPage.module.css'

const FilmsPage = ({ films }) => {
  const results = films.results
  const localStorageData = useSelector((data) => data.ratedData)

  return (
    <div className={styles.filmsPage}>
      {results ? (
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
        <div></div>
      )}
    </div>
  )
}

export default FilmsPage
