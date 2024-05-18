'use client'

import FilmFullInfo from '@/components/Films/FilmFullInfo'
import NavPanel from '@/components/NavPanel/NavPanel'
import { usePathname, useRouter } from 'next/navigation'
import img from '../../../img/404.png'
import Image from 'next/image'
import { Button } from '@mantine/core'
import styles from './404.module.css'

export default function FilmPage() {
  const pathname = usePathname().replace(/[//]/gi, '')
  const router = useRouter()

  return (
    <div className={styles.App}>
      {isFinite(pathname) ? (
        <>
          <NavPanel />
          <FilmFullInfo />
        </>
      ) : (
        <>
          <NavPanel is404={true} />
          <div className={styles.notFoundWrapper}>
            <Image src={img} alt="404" />
            <h3 className={styles.notFoundTitle}>
              We can’t find the page you are looking for
            </h3>
            <Button
              className={styles.notFoundBtn}
              onClick={() => router.push('/')}
            >
              Go Home
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
