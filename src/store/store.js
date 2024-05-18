import { ratedData } from '@/reducers/ratedDataReducer'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { query } from '../reducers/queryReducer'

const reducers = combineReducers({
  query,
  ratedData,
})

export const store = configureStore({
  reducer: reducers,
})
