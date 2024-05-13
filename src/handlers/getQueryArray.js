const getQueryArray = (objectQuery) => {
  return Object.entries(objectQuery).filter((query) => query[1])
}

export default getQueryArray
