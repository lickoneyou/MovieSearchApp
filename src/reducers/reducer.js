const defaultState = {
  with_genres: '',
  primary_release_year: '',
  'vote_average.gte': '',
  'vote_average.lte': '',
  query: '',
  sort_by: ''
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_FILTER':
      const filter = action.payload.filter
      const value = action.payload.value
      return { ...state, [filter]: value }
    case 'RESET_FILTERS':
      return { ...defaultState }
    case 'RESET_FILTERS_WITHOUT_QUERY':
      return { ...defaultState, query: state.query }
    default:
      return state
  }
}
