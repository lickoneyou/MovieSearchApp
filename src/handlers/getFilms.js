const getFilms = async (set, query, path) => {
  const res = await fetch(`/api/${path}/movie`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query),
  })
  const data = await res.json()
  set(data)
}

export default getFilms
