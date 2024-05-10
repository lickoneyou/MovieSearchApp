import FilmFullInfo from '@/components/Films/FilmFullInfo'
import NavPanel from '@/components/NavPanel/NavPanel'
import styles from '../../page.module.css'

export default function FilmPage() {
  return (
    <div className={styles.App}>
      <NavPanel />
      <FilmFullInfo />
    </div>
  )
}
