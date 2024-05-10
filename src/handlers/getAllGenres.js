const getAllGenres = async (set) => {
  const res = await fetch('/api/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify('genre/movie/list'),
  })
  const data = await res.json()
  set(data.genres)
}

export default getAllGenres
