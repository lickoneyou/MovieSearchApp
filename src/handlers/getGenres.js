const getGenres = async (genreIds, set) => {
  const res = await fetch('/api/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify('genre/movie/list'),
  })
  const data = await res.json()
  const result = []
  data.genres.forEach((genre) =>
    genreIds.includes(genre.id) ? result.push(genre.name) : false,
  )
  set(result)
}

export default getGenres