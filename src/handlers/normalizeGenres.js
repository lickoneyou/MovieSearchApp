const normalizeGenres = (genres) => {
  return genres.map((genre) => ({ value: genre.name, lable: genre.name }))
}

export default normalizeGenres
