import FilterSelect from './FilterSelect'
import styles from './ControlPanel.module.css'
import SearchForm from './SearchForm'
import { Button } from '@mantine/core'
import { useEffect, useState } from 'react'
import getAllGenres from '@/handlers/getAllGenres'
import normalizeGenres from '@/handlers/normalizeGenres'
import getOldestDate from '@/handlers/getOldestDate'
import createArrayYears from '@/handlers/createArrayYears'

const ControlPanel = () => {
  const [genre, setGenre] = useState([])
  const [oldestDate, setOldestDate] = useState([])

  useEffect(() => {
    getAllGenres(setGenre)
    getOldestDate(setOldestDate)
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.searchWrapper}>
        <h2 className={styles.headerTitle}>Movies</h2>
        <SearchForm />
      </div>
      <div className={styles.filterFormWrapper}>
        <FilterSelect
          label="Genres"
          filter="genres"
          placeholder="Select genre"
          isIcon={true}
          width="284"
          data={normalizeGenres(genre)}
        />
        <FilterSelect
          label="Release year"
          filter="releaseYear"
          placeholder="Select release year"
          isIcon={true}
          width="284"
          data={createArrayYears(oldestDate)}
        />
        <FilterSelect
          label="Ratings"
          filter="ratingsFrom"
          placeholder="From"
          isIcon={false}
          width="138"
          data={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        />
        <FilterSelect
          label=""
          filter="ratingsTo"
          placeholder="To"
          isIcon={false}
          width="138"
          data={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        />
        <Button
          variant="transparent"
          color="var(--color-gray600)"
          pr="0px"
          pl="5"
        >
          Reset filters
        </Button>
      </div>
      <FilterSelect
        label="Sort by"
        placeholder="Select sort"
        isIcon={true}
        width="284"
        mt="10"
      />
    </header>
  )
}

export default ControlPanel
