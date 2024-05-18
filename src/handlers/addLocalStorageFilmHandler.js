const addLocalStorageFilmHandler = (state, action) => {
  localStorage.setItem(
    'ratedData',
    JSON.stringify({
      ...state,
      [action.payload.id]: action.payload,
    }),
  )
  state = JSON.parse(localStorage.getItem('ratedData'))
  return state
}

export default addLocalStorageFilmHandler
