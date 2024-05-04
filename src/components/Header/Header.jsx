import React from 'react'
import styles from './Header.module.css'
import SearchForm from './SearchForm'

const Header = () => {
  return (
    <header>
      <div className={styles.searchWrapper}>
        <h2 className={styles.headerTitle}>Movies</h2>
        <SearchForm />
      </div>
    </header>
  )
}

export default Header
