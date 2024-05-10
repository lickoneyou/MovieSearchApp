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

const FilmCard = ({
  imgSrc,
  title,
  id,
  releaseDate,
  voteAverage,
  voteCount,
  genreIds,
}) => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    getGenres(genreIds, setGenres)
  }, [genreIds])

  return (
    <div className={styles.filmCard}>
      <div className={styles.filmCardContainer}>
        <Image
          className={styles.filmCardPoster}
          src={getImgSrc(300, imgSrc)}
          alt={title}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
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
          <p className={styles.filmCardGenres}>
            Genre <span>{genres.join(', ')}</span>
          </p>
        </div>
      </div>
      <IconStarFilled className={styles.filmCardMyRatingStars} />
    </div>
  )
}

export default FilmCard
