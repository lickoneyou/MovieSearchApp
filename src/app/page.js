'use client'

import ControlPanel from '@/components/ControlPanel/ControlPanel'
import Films from '@/components/Films/Films'
import NavPanel from '@/components/NavPanel/NavPanel'
import { MantineProvider } from '@mantine/core'
import './reset.css'
import styles from './page.module.css'
import '@mantine/core/styles.css'

export default function Home() {
  return (
    <MantineProvider>
      <div className={styles.App}>
        <NavPanel />
        <ControlPanel />
        <Films />
      </div>
    </MantineProvider>
  )
}
