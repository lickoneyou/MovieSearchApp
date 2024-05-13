import getAllGenres from '@/handlers/getAllGenres'
import getGenreId from '@/handlers/getGenreId'
import getGenreName from '@/handlers/getGenreName'
import { Group, Select, rem } from '@mantine/core'
import { IconChevronDown, IconSelector } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './FilterSelect.module.css'

function FilterSelect({
  label,
  placeholder,
  isIcon,
  width = 0,
  mt = 25,
  data = [],
  filter,
}) {
  const iconChevronDown = (
    <IconChevronDown style={{ width: rem(16), height: rem(16) }} />
  )
  const iconSelector = (
    <IconSelector style={{ width: rem(16), height: rem(16) }} />
  )
  const dispath = useDispatch()
  const [genre, setGenre] = useState([])
  const value = useSelector(value => value)

  useEffect(() => {
    getAllGenres(setGenre)
  }, [])

  return (
    <Group justify="space-between" mt={mt}>
      <Select
        mt="md"
        className={styles.filterSelect}
        style={{ width: `${width}px` }}
        data={data}
        radius="sm"
        size="md"
        value={label === 'Genres' ? getGenreName(genre, value[filter]) : value[filter]}
        placeholder={placeholder}
        label={label}
        rightSection={isIcon ? iconChevronDown : iconSelector}
        comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 }, shadow: 'md' }}
        onChange={(e) => {
          dispath({
            type: 'ADD_FILTER',
            payload: {
              filter: filter,
              value: label === 'Genres' ? getGenreId(genre, e) : e,
            },
          })
        }}
      />
    </Group>
  )
}

export default FilterSelect
