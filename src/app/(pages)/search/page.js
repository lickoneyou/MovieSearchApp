'use client'

import ControlPanel from '@/components/ControlPanel/ControlPanel'
import Films from '@/components/Films/Films'
import NavPanel from '@/components/NavPanel/NavPanel'
import styles from '../../page.module.css'

export default function Search() {
  return (
    <div className={styles.App}>
      <NavPanel />
      <ControlPanel />
      <Films path="search" />
    </div>
  )
}
