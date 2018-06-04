import * as http from 'redux/actions/http'
import * as sync from 'redux/actions/sync'
import * as helpers from 'redux/actions/helpers.js'

import { receiveResource } from 'redux/actions/async/resources.js'

export const RECEIVE_USER_NOTIFICATIONS = 'RECEIVE_USER_NOTIFICATIONS'

export function dismissUserNotification(notification, userId) {
  return dispatch => {
    let moddedNotification = notification
    moddedNotification.viewed_users.push(userId)
    http.resourcePatch("notifications", "notification", notification).then(
      response => response.json()
    ).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(sync.dismissUserNotification(response.data.id))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
      }
    })
  }
}

export function fetchUserActivity(id) {
  return dispatch => {
    dispatch(sync.requestShowItem())
    http.userActivityFetch(id).then(
      response => response.json()
    ).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
        dispatch(receiveResource('visit', response))
      } else {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveResource('visit', {data: {}}))
      }
    })
  }
}

export function fetchUserNotifications(userId) {
  return dispatch =>
    http.userNotificationsFetch(userId).then(function(response) {
      //helpers.setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveUserNotifications(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveUserNotifications({data: []}))
      }
    })
}

function receiveUserNotifications(json) {
  return {
    type: RECEIVE_USER_NOTIFICATIONS,
    userNotifications: json.data,
    receivedAt: Date.now()
  }
}

export function userAuthDestroy(user) {
  return dispatch =>
    http.userLogout().then(function(response) {
      if(response.status === 200) {
        localStorage.accessToken = ""
        localStorage.tokenClient = ""
        localStorage.tokenExpiry = ""
        localStorage.uid = ""

        return dispatch(sync.userAuthDestroy())
      } else {
        dispatch(sync.userLogoutFailure(response.json()))
      }
    })
}

export function userAuth() {
  return dispatch => {
    http.userAuth().then(function(response) {
      helpers.setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
        dispatch(userRoleForAuthSuccess(response.data))
      } else {
        dispatch(sync.userAuthFailure(response))
      }
    })
  }
}

export function userLogin(user) {
  return dispatch =>
    http.userLogin(user).then(function(response) {
      helpers.setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
        localStorage.uid = response.data.email
        dispatch(userRoleForAuthSuccess(response.data))
        dispatch(sync.successMessage("Successfully Logged In"))
      } else {
        dispatch(sync.userLoginFailure(response))
      }
    })
}

export function userRoleForAuthSuccess(user) {
  return dispatch =>
    http.userRoleFetch(user).then(function(response) {
      //helpers.setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
        user.role = response.data
        dispatch(sync.receiveTableHeaders())
        dispatch(sync.userAuthSuccess(user))
      } else {
        dispatch(sync.userLoginFailure(response))
      }
    })
}
