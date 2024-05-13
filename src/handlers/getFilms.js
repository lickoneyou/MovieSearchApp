const getFilms = async (set, query) => {
  const res = await fetch('/api/discover/movie', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query),
  })
  const data = await res.json()
  set(data)
}

export default getFilms
