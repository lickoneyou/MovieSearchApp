import { ratedData } from '@/reducers/ratedDataReducer'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { query } from '../reducers/queryReducer'
import { breadcrumbs } from '@/reducers/breadcrumbs'

const reducers = combineReducers({
  query,
  ratedData,
  breadcrumbs,
})

export const store = configureStore({
  reducer: reducers,
})
