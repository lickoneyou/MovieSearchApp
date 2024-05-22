'use client'

import ControlPanel from '@/components/ControlPanel/ControlPanel'
import Films from '@/components/Films/Films'
import NavPanel from '@/components/NavPanel/NavPanel'
import { Suspense } from 'react'
import styles from '../../page.module.css'

export default function Search() {
  return (
    <Suspense fallback={<div>q123</div>}>
      <div className={styles.App}>
        // <NavPanel />
        // <ControlPanel />
        // <Films path="search" />
      </div>
    </Suspense>
  )
}
