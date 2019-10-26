import { compose, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootReducers.js'

let storeEnhancers

if (process.env.NODE_ENV === 'production') {
  // storeEnhancers = compose(applyMiddleware(thunk))
} else {
  // storeEnhancers = compose(composeWithDevTools(applyMiddleware(thunk)))
}

const configureStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, storeEnhancers)
  if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept('./rootReducers', () => {
      console.log('replacing reducer...')
      const nextRootReducer = require('./rootReducers.js').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore()
