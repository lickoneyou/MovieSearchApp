import getImgSrc from '@/handlers/getImgSrc'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './FilmFullInfo.module.css'

const Production = ({ id, path, alt }) => {
  const [imageSrc, setImageSrc] = useState(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcVA8AAckBI7zuPHQAAAAASUVORK5CYII=',
  )
  useEffect(() => {
    getImgSrc(400, path, setImageSrc)
  }, [])

  return (
    <div className={styles.productionItem} key={id}>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} fill alt={alt} />
      </div>
      <h3>{alt}</h3>
    </div>
  )
}

export default Production
