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
import noPoster from '../../img/noPoster.png'
import { useDisclosure } from '@mantine/hooks'
import { Button, Modal, Rating } from '@mantine/core'
import { useDispatch } from 'react-redux'
import WriteUp from './WriteUp'

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
  w = '119',
  h = '170',
  rValue = 0,
  isFullInfo,
}) => {
  const [genres, setGenres] = useState([])
  const [src, setSrc] = useState(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcVA8AAckBI7zuPHQAAAAASUVORK5CYII=',
  )
  const [opened, { open, close }] = useDisclosure(false)
  const [ratingValue, setRatingValue] = useState(rValue)
  const [saveRatingValue, setSaveRatingValue] = useState(rValue)
  const dispatch = useDispatch()

  useEffect(() => {
    if (genreIds) getGenres(genreIds, setGenres)
    getImgSrc('400', imgSrc, setSrc)
  }, [])

  return (
    <>
      <Modal.Root opened={opened} onClose={close} centered={true} size={'sm'}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header className={styles.modalHeader}>
            <Modal.Title className={styles.modalTitle}>Your rating</Modal.Title>
            <Modal.CloseButton className={styles.modalCloseButton} />
          </Modal.Header>
          <Modal.Body className={styles.modalBody}>
            <h2 className={styles.modalFilmTitle}>{title}</h2>
            <Rating
              className={styles.modalRating}
              value={ratingValue}
              onChange={setRatingValue}
              count="10"
              size="xl"
            />
            <div className={styles.btnWrapper}>
              <Button
                onClick={() => {
                  close()
                  setSaveRatingValue(ratingValue)
                  dispatch({
                    type: 'ADD_FILM',
                    payload: {
                      imgSrc,
                      title,
                      id,
                      releaseDate,
                      voteAverage,
                      voteCount,
                      genreIds,
                      genresArr,
                      duration,
                      premiere,
                      budget,
                      grossWorldwide,
                      rValue: ratingValue,
                    },
                  })
                }}
                className={styles.modalButton}
                variant="filled"
              >
                Save
              </Button>
              <Button
                variant="transparent"
                color="var(--color-purple500Main)"
                onClick={() => {
                  close()
                  setRatingValue(0)
                  setSaveRatingValue(0)
                  dispatch({ type: 'REMOVE_FILM', payload: { id } })
                }}
              >
                Remove rating
              </Button>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
      <div className={styles.filmCard}>
        <div className={styles.filmCardContainer}>
          <Image
            className={styles.filmCardPoster}
            src={imgSrc ? src : noPoster}
            alt={title}
            width={w}
            height={h}
            sizes="100vw"
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
              <WriteUp
                duration={duration}
                premiere={premiere}
                budget={budget}
                grossWorldwide={grossWorldwide}
                genreIds={genreIds}
                genres={genres}
                genresArr={genresArr}
                isFullInfo={isFullInfo}
              />
            </div>
          </div>
        </div>
        <div className={styles.rateWrapper}>
          <IconStarFilled
            className={[
              styles.filmCardMyRatingStars,
              saveRatingValue > 0 ? styles.filmCardPurpleStars : false,
            ].join(' ')}
            onClick={open}
          />
          {saveRatingValue > 0 ? (
            <p className={styles.rating}>{saveRatingValue}</p>
          ) : (
            false
          )}
        </div>
      </div>
    </>
  )
}

export default FilmCard
