const getFilmInfo = async (set, id) => {
  const res = await fetch(`/api/movie/${id}`)
  const data = await res.json()
  set(data)
}

export default getFilmInfo
