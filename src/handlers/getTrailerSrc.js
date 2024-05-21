const getTrailerSrc = (arr) => {
  const key = arr.results.length ? arr.results[0].key : false
  return key ? `https://www.youtube.com/embed/${key}` : ''
}

export default getTrailerSrc
