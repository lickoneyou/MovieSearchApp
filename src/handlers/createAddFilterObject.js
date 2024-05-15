import createSortQuery from './createSortQuery'
import getGenreId from './getGenreId'

const createAddFilterObject = (filter, label, genre, e) => {
  const obj = {
    filter: filter,
  }
  switch (label) {
    case 'Genres':
      obj.value = getGenreId(genre, e)
      break
    case 'Sort by':
      obj.value = createSortQuery(e)
      break
    default:
      obj.value = e
      break
  }
  return obj
}

export default createAddFilterObject
