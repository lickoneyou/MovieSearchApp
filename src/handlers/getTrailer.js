import getTrailerSrc from '@/handlers/getTrailerSrc'

const getTrailer = async (id, set) => {
  const res = await fetch(`/api/videofetcher`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  })
  const data = await res.json()
  set(getTrailerSrc(data))
}

export default getTrailer
