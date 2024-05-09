'use client'

import ControlPanel from '@/components/ControlPanel/ControlPanel'
import Films from '@/components/Films/Films'
import NavPanel from '@/components/NavPanel/NavPanel'
import { MantineProvider } from '@mantine/core'
import './reset.css'
import styles from './page.module.css'
import '@mantine/core/styles.css'
import { useEffect } from 'react'

export default function Home() {
  const fn = async () => {
    const res = await fetch('/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify('/discover/movie'),
    })
    const data = await res.json()
    console.log(data)
  }
  useEffect(() => {
    fn()
  }, [])

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
