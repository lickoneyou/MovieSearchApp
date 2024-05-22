const addLocalStorageFilmHandler = (state, action) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(
      'ratedData',
      JSON.stringify({
        ...state,
        [action.payload.id]: action.payload,
      }),
    )
    state = JSON.parse(localStorage.getItem('ratedData'))
  }

  return state
}

export default addLocalStorageFilmHandler
