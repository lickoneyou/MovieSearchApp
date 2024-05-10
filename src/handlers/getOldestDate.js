import getYears from './getYears'

const getOldestDate = async (set) => {
  const res = await fetch('/api?sort_by=primary_release_date.asc', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify('/discover/movie'),
  })
  const data = await res.json()
  set(getYears(data.results[0].release_date))
}

export default getOldestDate
