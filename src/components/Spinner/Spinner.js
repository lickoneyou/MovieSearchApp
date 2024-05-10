import { Loader } from '@mantine/core'
import styles from './Spinner.module.css'

const Spinner = () => {
  return <Loader className={styles.spinner} color="#541f9d" size="xl" />
}

export default Spinner
