const getGenreId = (genreArr, genreName) => {
  return genreArr.find((el) => el.name === genreName).id
}

export default getGenreId
