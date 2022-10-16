import { configureStore } from '@reduxjs/toolkit'
import fieldReducer from './fieldSlice'

export default configureStore({
  reducer: {
    field: fieldReducer
  },
})
