import addLocalStorageFilmHandler from '@/handlers/addLocalStorageFilmHandler'

export const ratedData = (state, action) => {
  if (!localStorage.getItem('ratedData')) {
    localStorage.setItem('ratedData', JSON.stringify({}))
  }

  state = JSON.parse(localStorage.getItem('ratedData'))

  switch (action.type) {
    case 'ADD_FILM':
      state[action.payload.id] = action.payload
      return addLocalStorageFilmHandler(state, action)
    default:
      return state
  }
}
