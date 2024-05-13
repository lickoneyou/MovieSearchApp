const getAllGenres = async (set) => {
  const res = await fetch('/api/genre/movie/list')
  const data = await res.json()
  set(data.genres)
}

export default getAllGenres
