const removeLocalStorageFilmHandler = (state) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(
      'ratedData',
      JSON.stringify({
        ...state,
      }),
      state = JSON.parse(localStorage.getItem('ratedData'))
    )

    return state
  }
}

export default removeLocalStorageFilmHandler
