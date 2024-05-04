import React from 'react'
import FilterSelect from './FilterSelect'
import styles from './Header.module.css'
import SearchForm from './SearchForm'
import { Button } from '@mantine/core'

const Header = () => {
  return (
    <header>
      <div className={styles.searchWrapper}>
        <h2 className={styles.headerTitle}>Movies</h2>
        <SearchForm />
      </div>
      <div className={styles.filterFormWrapper}>
        <FilterSelect
          label="Genres"
          placeholder="Select genre"
          isIcon={true}
          width="284"
        />
        <FilterSelect
          label="Release year"
          placeholder="Select release year"
          isIcon={true}
          width="284"
        />
        <FilterSelect
          label="Ratings"
          placeholder="From"
          isIcon={false}
          width="138"
        />
        <FilterSelect label="" placeholder="To" isIcon={false} width="138" />
        <Button
          variant="transparent"
          color="var(--color-gray600)"
          pr="0px"
          pl="5"
        >
          Reset filters
        </Button>
      </div>
      <FilterSelect label='Sort by' placeholder='Select sort' isIcon={true} width='284' mt='10'/>
    </header>
  )
}

export default Header
