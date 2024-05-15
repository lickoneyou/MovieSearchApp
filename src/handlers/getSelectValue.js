import getGenreName from "./getGenreName"
import getSortQueryName from "./getSortQueryName"

const getSelectValue = (label, genre, value, filter) => {
  switch (label) {
    case 'Genres':
      return getGenreName(genre, value[filter])
    case 'Sort by':
      return getSortQueryName(value[filter])
    default:
      return value[filter]
  }
}

export default getSelectValue
