import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from 'redux/reducers'
import initialState from 'redux/store/initialState'

const configureStore = preloadedState => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
)

export default configureStore
