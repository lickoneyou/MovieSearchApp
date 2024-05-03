import React from 'react'
import styles from './Aside.module.css'
import titleImg from '../../img/titleImg.png'
import Nav from '../Nav/Nav'

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.titleWrapper}>
        <img className={styles.titleImg} src={titleImg} alt="titleImg" />
        <h1>ArrowFlicks</h1>
      </div>
      <Nav />
    </aside>
  )
}

export default Aside
