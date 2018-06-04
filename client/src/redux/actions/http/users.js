import * as helpers from 'redux/actions/http/helpers.js'
import { apiUrl } from 'utils/http'

export function userActivityFetch(id) {
  return fetch(`${apiUrl()}/authed/users/${id}/activity`, helpers.genericAuthedGet())
}

export function userAuth() {
  return fetch(`${apiUrl()}/auth/validate_token`, helpers.genericAuthedGet())
}

export function userLogout() {
  return fetch(`${apiUrl()}/auth/sign_out`, {
    method: "DELETE",
    headers: {
      "access-token": localStorage.accessToken || "",
      "token-type":   "Bearer",
      "client":       localStorage.tokenClient || "",
      "expiry":       localStorage.tokenExpiry || "",
      "uid":          localStorage.uid || ""
    }
  })
}

export function userLogin(user) {
  return fetch(`${apiUrl()}/auth/sign_in`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password
    })
  })
}

export function userNotificationsFetch(userId) {
  return fetch(`${apiUrl()}/authed/notifications?mode=forUser&forUser=${userId}`, helpers.genericAuthedGet())
}

export function userRoleFetch(user) {
  return fetch(`${apiUrl()}/authed/roles/${user.role_id}`, helpers.genericAuthedGet())
}
