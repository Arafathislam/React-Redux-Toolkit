import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import themReducer from '../features/them/themSlice'
export default configureStore({
  reducer: {
    counter:counterReducer,
    them:themReducer,
  },

})