const getImgSrc = async (width, imgSrc, set) => {
  const res = await fetch('/api/imagefetcher', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ width, imgSrc }),
  })
  const data = await res.json()
  set(data.url)
}

export default getImgSrc
