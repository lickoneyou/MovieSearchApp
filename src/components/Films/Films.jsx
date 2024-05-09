import { useEffect, useState } from 'react'
import styles from './Films.module.css'
import FilmsPage from './FilmsPage'

const Films = () => {
  const [films, setFilms] = useState('')

  const getFilms = async () => {
    const res = await fetch('/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify('/discover/movie'),
    })
    const data = await res.json()
    setFilms(data)
  }
  useEffect(() => {
    getFilms()
  }, [])

  return (
    <main className={styles.films}>
      <FilmsPage films={films} />
    </main>
  )
}

export default Films
