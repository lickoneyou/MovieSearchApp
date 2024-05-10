import Image from 'next/image'
import Link from 'next/link'
import { IconStarFilled } from '@tabler/icons-react'
import styles from './FilmCard.module.css'
import { useEffect, useState } from 'react'
import getImgSrc from '@/handlers/getImgSrc'
import getYears from '@/handlers/getYears'
import normalizeVoteAverage from '@/handlers/normalizeVoteAverage'
import getGenres from '@/handlers/getGenres'
import normalizeVoteCount from '@/handlers/normalizeVoteCount'
import normalizeGenres from '@/handlers/normalizeGenres'
import normalizeTime from '@/handlers/normalizeTime'
import normalizeDate from '@/handlers/normalizeDate'
import normalizeСurrency from '@/handlers/normalizeСurrency'

const FilmCard = ({
  imgSrc,
  title,
  id,
  releaseDate,
  voteAverage,
  voteCount,
  genreIds,
  genresArr = [],
  duration,
  premiere,
  budget,
  grossWorldwide,
}) => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    if (genreIds) getGenres(genreIds, setGenres)
  }, [])

  return (
    <div className={styles.filmCard}>
      <div className={styles.filmCardContainer}>
        <Image
          className={styles.filmCardPoster}
          src={getImgSrc('400', imgSrc)}
          alt={title}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: 'auto', height: '100%' }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcVA8AAckBI7zuPHQAAAAASUVORK5CYII="
        />
        <div className={styles.filmCardDescr}>
          <div>
            <Link className={styles.filmCardTitle} href={String(id)}>
              {title}
            </Link>
            <p className={styles.filmCardReleaseDate}>
              {getYears(releaseDate)}
            </p>
            <div className={styles.filmCardRatingWrapper}>
              <IconStarFilled className={styles.filmCardRatingStars} />
              <p className={styles.filmCardRatingVoteAverage}>
                {normalizeVoteAverage(voteAverage)}
              </p>
              <p className={styles.filmCardRatingVoteCount}>
                ({normalizeVoteCount(voteCount)})
              </p>
            </div>
          </div>
          <div>
            {duration ? (
              <p className={styles.filmCardWriteUp}>
                Duration <span>{normalizeTime(duration)}</span>
              </p>
            ) : (
              false
            )}
            {premiere ? (
              <p className={styles.filmCardWriteUp}>
                Premiere <span>{normalizeDate(premiere)}</span>
              </p>
            ) : (
              false
            )}
            {budget ? (
              <p className={styles.filmCardWriteUp}>
                Budget <span>{normalizeСurrency(budget)}</span>
              </p>
            ) : (
              false
            )}
            {grossWorldwide ? (
              <p className={styles.filmCardWriteUp}>
                Gross worldwide <span>{normalizeСurrency(grossWorldwide)}</span>
              </p>
            ) : (
              false
            )}
            <p className={styles.filmCardWriteUp}>
              Genre{' '}
              <span>
                {genreIds
                  ? genres.join(', ')
                  : normalizeGenres(genresArr).join(', ')}
              </span>
            </p>
          </div>
        </div>
      </div>
      <IconStarFilled className={styles.filmCardMyRatingStars} />
    </div>
  )
}

export default FilmCard
