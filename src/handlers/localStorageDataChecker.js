const localStorageDataChecker = (film, localStorageData, value) => {
  if (film.id in localStorageData) {
    return localStorageData[film.id][value]
  }
  return 0
}

export default localStorageDataChecker
