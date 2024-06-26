import styles from './NavPanel.module.css'
import titleImg from '../../img/titleImg.png'
import Image from 'next/image'
import Links from '../Links/Links'

const NavPanel = ({ is404 = false }) => {
  const bg = is404 ? { background: 'transparent' } : {}

  return (
    <aside className={styles.aside} style={bg}>
      <div className={styles.titleWrapper}>
        <Image className={styles.titleImg} src={titleImg} alt="titleImg" />
        <h1>ArrowFlicks</h1>
      </div>
      {is404 ? <></> : <Links />}
    </aside>
  )
}

export default NavPanel
