import * as async from '../actions/async'
import * as sync from '../actions/sync'

export function errorMessages(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case sync.USER_AUTH_FAILURE:
      return state
    case sync.USER_LOGIN_FAILURE: case sync.USER_LOGOUT_FAILURE: case sync.FETCH_RESOURCE_FAILURE: case sync.CREATE_RESOURCE_FAILURE: case sync.EDIT_RESOURCE_FAILURE: case sync.DESTROY_RESOURCE_FAILURE: case sync.UPDATE_ERROR_MESSAGES:
      return Object.assign({}, state, {
        items: action.errorMessages,
      })
    case sync.REMOVE_ERROR_MESSAGE:
      const errorObject = action.errorMessage
      return { items: state.items.filter(errorObjectInState => errorObjectInState !== errorObject) }
    default:
      return state
  }
}

export function successMessages(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case sync.UPDATE_SUCCESS_MESSAGES:
      return Object.assign({}, state, {
        items: action.successMessages,
      })
    case sync.REMOVE_SUCCESS_MESSAGE:
      const successObject = action.successMessage
      return { items: state.items.filter(successObjectInState => successObjectInState !== successObject) }
    default:
      return state
  }
}
