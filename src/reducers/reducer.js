const defaultState = {
  genres: '',
  releaseYear: '',
  ratingsFrom: '',
  ratingsTo: '',
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_FILTER':
      const filter = action.payload.filter
      const value = action.payload.value
      return { ...state, [filter]: value }
    default:
      return state
  }
}
