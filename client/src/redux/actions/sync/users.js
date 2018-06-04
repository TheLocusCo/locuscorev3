import { authenticatedNavigation } from 'redux/actions/db.js'

export const RECEIVE_AUTHED_NAVIGATION = 'RECEIVE_AUTHED_NAVIGATION'
export const REMOVE_USER_NOTIFICATION = 'REMOVE_USER_NOTIFICATION'
export const REQUEST_USERS = 'REQUEST_USERS'
export const REQUEST_USER = 'REQUEST_USER'
export const REQUEST_USER_NOTIFICATIONS = 'REQUEST_USER_NOTIFICATIONS'
export const USER_AUTH_FAILURE = 'USER_AUTH_FAILURE'
export const USER_AUTH_DESTROY = 'USER_AUTH_DESTROY'
export const USER_AUTH = 'USER_AUTH'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE'
export const USER_NEW = 'USER_NEW'

export function dismissUserNotification(itemId) {
  return {
    type: REMOVE_USER_NOTIFICATION,
    idToCleanup: itemId
  }
}

export function receiveRoleNavigation(user) {
  return {
    type: RECEIVE_AUTHED_NAVIGATION,
    authedNavigation: authenticatedNavigation(user)
  }
}

export function userAuthDestroy() {
  return {
    type: USER_AUTH_DESTROY
  }
}

export function userAuthFailure() {
  return {
    type: USER_AUTH_FAILURE
  }
}

export function userAuthSuccess(user) {
  return {
    type: USER_AUTH,
    payload: {
      user
    }
  }
}

export function userLogoutFailure(data) {
  //console.log("TESTING IN FAILURE" + JSON.stringify(data))
  return {
    type: USER_LOGOUT_FAILURE,
    errorMessages: [data.errors]
  }
}

export function userLoginFailure(data) {
  //console.log("TESTING IN FAILURE" + JSON.stringify(data))
  return {
    type: USER_LOGIN_FAILURE,
    errorMessages: [data.errors]
  }
}

export function userLoginSuccess(user) {
  return {
    type: USER_LOGIN,
    payload: {
      user
    }
  }
}
