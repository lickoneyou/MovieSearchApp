import Image from 'next/image'
import Link from 'next/link'
import { IconStarFilled } from '@tabler/icons-react'
import styles from './FilmCard.module.css'
import { useEffect, useState } from 'react'

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

  const getImgSrc = (width, imgSrc) => {
    return `https://image.tmdb.org/t/p/w${width}${imgSrc}`
  }

  const getYears = (date) => {
    return new Date(date).getFullYear()
  }

  const normalizeVoteAverage = (average) => {
    return average.toFixed(1)
  }

  const getGenres = async (genreIds) => {
    const res = await fetch('/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify('genre/movie/list'),
    })
    const data = await res.json()
    const result = []
    data.genres.forEach((genre) =>
      genreIds.includes(genre.id) ? result.push(genre.name) : false,
    )
    setGenres(result)
  }

  const normalizeVoteCount = (counter) => {
    if (counter < 999999 && counter > 1000) return (counter / 1000).toFixed() + 'K'
    return counter
  }

  useEffect(() => {
    getGenres(genreIds)
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
