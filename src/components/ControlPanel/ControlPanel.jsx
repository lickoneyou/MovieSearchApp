import FilterSelect from './FilterSelect'
import styles from './ControlPanel.module.css'
import SearchForm from './SearchForm'
import { Button } from '@mantine/core'
import { useEffect, useState } from 'react'
import getAllGenres from '@/handlers/getAllGenres'
import normalizeGenres from '@/handlers/normalizeGenres'
import getOldestDate from '@/handlers/getOldestDate'
import createArrayYears from '@/handlers/createArrayYears'
import { useDispatch } from 'react-redux'

const ControlPanel = () => {
  const [genre, setGenre] = useState([])
  const [oldestDate, setOldestDate] = useState('')
  const dispath = useDispatch()

  useEffect(() => {
    getAllGenres(setGenre)
    getOldestDate(setOldestDate)
  }, [])


  return (
    <>
    {oldestDate === 'Server' ? <></> : (<header className={styles.header}>
      <div className={styles.searchWrapper}>
        <h2 className={styles.headerTitle}>Movies</h2>
        <SearchForm />
      </div>
      <div className={styles.filterFormWrapper}>
        <FilterSelect
          label="Genres"
          filter="with_genres"
          placeholder="Select genre"
          isIcon={true}
          width="284"
          data={...[{ value: '', lable: '', disabled: true }, ...normalizeGenres(genre)]}
        />
        <FilterSelect
          label="Release year"
          filter="primary_release_year"
          placeholder="Select release year"
          isIcon={true}
          width="284"
          data={...[{ value: '', lable: '', disabled: true }, ...createArrayYears(oldestDate)]}
        />
        <FilterSelect
          label="Ratings"
          filter="vote_average.gte"
          placeholder="From"
          isIcon={false}
          width="138"
          data={[
            { value: '', lable: '', disabled: true },
            { value: '0', label: '0' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' },
          ]}
        />
        <FilterSelect
          label=""
          filter="vote_average.lte"
          placeholder="To"
          isIcon={false}
          width="138"
          data={[
            { value: '', lable: '', disabled: true },
            { value: '0', label: '0' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' },
          ]}
        />
        <Button
          variant="transparent"
          color="var(--color-gray600)"
          pr="0px"
          pl="5"
          onClick={() => {
            dispath({ type: 'RESET_FILTERS' })
          }}
        >
          Reset filters
        </Button>
      </div>
      <FilterSelect
        label="Sort by"
        placeholder="Select sort"
        filter='sort_by'
        isIcon={true}
        width="284"
        mt="10"
        data={[
            { value: '', lable: '', disabled: true },
            { value: 'Title ▲', label: 'Title ▲' },
            { value: 'Title ▼', label: 'Title ▼' },
            { value: 'Popularity ▲', label: 'Popularity ▲' },
            { value: 'Popularity ▼', label: 'Popularity ▼' },
            { value: 'Release date ▲', label: 'Release date ▲' },
            { value: 'Release date ▼', label: 'Release date ▼' },
            { value: 'Vote average ▲', label: 'Vote average ▲' },
            { value: 'Vote average ▼', label: 'Vote average ▼' },
            { value: 'Vote count ▲', label: 'Vote count ▲' },
            { value: 'Vote count ▼', label: 'Vote count ▼' },
          ]}
      />
    </header>)}
  </>
  )
}

export default ControlPanel
