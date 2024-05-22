import addLocalStorageFilmHandler from '@/handlers/addLocalStorageFilmHandler'
import removeLocalStorageFilmHandler from '@/handlers/removeLocalStorageFilmHandler'

export const ratedData = (state = {}, action) => {
  if (typeof global?.window !== 'undefined') {
    if (!localStorage.getItem('ratedData')) {
      localStorage.setItem('ratedData', JSON.stringify({}))
    }
    state = JSON.parse(localStorage.getItem('ratedData'))
  }

  switch (action.type) {
    case 'ADD_FILM':
      state[action.payload.id] = action.payload
      return addLocalStorageFilmHandler(state, action)
    case 'REMOVE_FILM':
      delete state[action.payload.id]
      return removeLocalStorageFilmHandler(state)
    default:
      return state
  }
}
