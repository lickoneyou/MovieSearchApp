export const breadcrumbs = (
  state = { crumbs: 'Movies', path: '/' },
  action,
) => {
  switch (action.type) {
    case 'ADD_CRUMBS':
      state = action.payload
      return state
    default:
      return state
  }
}
