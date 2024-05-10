const getFilms = async (set) => {
  const res = await fetch('/api/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify('/discover/movie'),
  })
  const data = await res.json()
  set(data)
}

export default getFilms
