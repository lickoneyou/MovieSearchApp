import { Group, Select, rem } from '@mantine/core'
import { IconChevronDown, IconSelector } from '@tabler/icons-react'
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
  const value = useSelector((value) => value[filter])

  return (
    <Group justify="space-between" mt={mt}>
      <Select
        mt="md"
        className={styles.filterSelect}
        style={{ width: `${width}px` }}
        data={data}
        radius="sm"
        size="md"
        id=""
        value={value}
        placeholder={placeholder}
        label={label}
        rightSection={isIcon ? iconChevronDown : iconSelector}
        onChange={(e) =>
          dispath({ type: 'ADD_FILTER', payload: { filter: filter, value: e } })
        }
      />
    </Group>
  )
}

export default FilterSelect
