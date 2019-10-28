import { combineReducers } from 'redux'

import order from './order/reducer'
import app from './app/reducer'

export default combineReducers({
  app,
  order
})