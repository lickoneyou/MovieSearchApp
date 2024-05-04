import { TextInput, rem, Button } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import styles from './SearchForm.module.css'

function SearchForm() {
  return (
    <TextInput
      radius="sm"
      size="md"
      placeholder="Search movie title"
      className={styles.searchForm}
      rightSectionWidth={105}
      leftSection={
        <IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      }
      rightSection={
        <Button radius="md" color="var( --color-purple500Main)">
          Search
        </Button>
      }
    />
  )
}

export default SearchForm
