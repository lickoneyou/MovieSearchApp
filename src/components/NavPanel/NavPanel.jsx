import styles from './NavPanel.module.css'
import titleImg from '../../img/titleImg.png'
import Image from 'next/image'
import Links from '../Links/Links'

const NavPanel = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.titleWrapper}>
        <Image className={styles.titleImg} src={titleImg} alt='titleImg'/>
        <h1>ArrowFlicks</h1>
      </div>
      <Links />
    </aside>
  )
}

export default NavPanel
