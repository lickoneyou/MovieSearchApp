import { Group, Select, rem } from '@mantine/core'
import { IconChevronDown, IconSelector } from '@tabler/icons-react'
import styles from './FilterSelect.module.css'

function FilterSelect({ label, placeholder, isIcon, width = 0, mt = 25 }) {
  const iconChevronDown = (
    <IconChevronDown style={{ width: rem(16), height: rem(16) }} />
  )
  const iconSelector = (
    <IconSelector style={{ width: rem(16), height: rem(16) }} />
  )

  return (
    <Group justify="space-between" mt={mt}>
      <Select
        mt="md"
        className={styles.filterSelect}
        style={{ width: `${width}px` }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        radius="sm"
        size="md"
        id=""
        placeholder={placeholder}
        label={label}
        rightSection={isIcon ? iconChevronDown : iconSelector}
      />
    </Group>
  )
}

export default FilterSelect
