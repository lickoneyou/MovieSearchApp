const getGenreName = (genreArr, genreId) => {
  return genreId ? genreArr.find((el) => el.id === genreId)?.name : ''
}

export default getGenreName
