import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import initialState from '../store/initialState'

const configureStore = preloadedState => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
)

export default configureStore
