const getFilms = async (set, query, path) => {
  try {
    const res = await fetch(`/api/${path}/movie`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(query),
    })
    const data = await res.json()
    set(data)
    return data
  } catch (error) {
    set('Server')
  }
}

export default getFilms
