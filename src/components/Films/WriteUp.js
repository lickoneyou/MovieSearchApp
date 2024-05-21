import createGenresNamesArray from '@/handlers/createGenresNamesArray'
import normalizeDate from '@/handlers/normalizeDate'
import normalizeTime from '@/handlers/normalizeTime'
import normalizeСurrency from '@/handlers/normalizeСurrency'
import styles from './FilmCard.module.css'

const WriteUp = ({
  duration,
  premiere,
  budget,
  grossWorldwide,
  genreIds,
  genres,
  genresArr,
  isFullInfo = false,
}) => {
  const classList = isFullInfo
    ? [styles.filmCardWriteUp, styles.filmCardWriteUpFullInfo].join(' ')
    : styles.filmCardWriteUp

  return (
    <>
      {duration ? (
        <p className={classList}>
          Duration <span>{normalizeTime(duration)}</span>
        </p>
      ) : (
        false
      )}
      {premiere ? (
        <p className={classList}>
          Premiere <span>{normalizeDate(premiere)}</span>
        </p>
      ) : (
        false
      )}
      {budget ? (
        <p className={classList}>
          Budget <span>{normalizeСurrency(budget)}</span>
        </p>
      ) : (
        false
      )}
      {grossWorldwide ? (
        <p className={classList}>
          Gross worldwide <span>{normalizeСurrency(grossWorldwide)}</span>
        </p>
      ) : (
        false
      )}
      <p className={classList}>
        Genre{' '}
        <span>
          {genreIds
            ? genres.join(', ')
            : createGenresNamesArray(genresArr).join(', ')}
        </span>
      </p>
    </>
  )
}

export default WriteUp
