import { TextInput, rem, Button } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './SearchForm.module.css'

function SearchForm() {
  const storeValue = useSelector((value) => value.query.query)
  const [searchValue, setSearchValue] = useState(storeValue)
  const dispatch = useDispatch('')
  const router = useRouter()

  return (
    <TextInput
      radius="sm"
      size="md"
      placeholder="Search movie title"
      className={styles.searchForm}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      rightSectionWidth={105}
      leftSection={
        <IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      }
      rightSection={
        <Button
          radius="md"
          color="var( --color-purple500Main)"
          onClick={() => {
            dispatch({
              type: 'ADD_FILTER',
              payload: {
                filter: 'query',
                value: searchValue,
              },
            })
            router.push('search')
            dispatch({ type: 'RESET_FILTERS_WITHOUT_QUERY' })
          }}
        >
          Search
        </Button>
      }
    />
  )
}

export default SearchForm
