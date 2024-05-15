import createAddFilterObject from '@/handlers/createAddFilterObject'
import getAllGenres from '@/handlers/getAllGenres'
import getSelectValue from '@/handlers/getSelectValue'
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
  const dispatch = useDispatch()
  const [genre, setGenre] = useState([])
  const value = useSelector((value) => value)

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
        value={getSelectValue(label, genre, value, filter)}
        placeholder={placeholder}
        label={label}
        rightSection={isIcon ? iconChevronDown : iconSelector}
        comboboxProps={{
          transitionProps: { transition: 'pop', duration: 200 },
          shadow: 'md',
        }}
        onChange={(e) => {
          dispatch({
            type: 'ADD_FILTER',
            payload: createAddFilterObject(filter, label, genre, e),
          })
        }}
      />
    </Group>
  )
}

export default FilterSelect
