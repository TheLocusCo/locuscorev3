import * as helpers from './helpers.js'

export function userAuth() {
  return fetch(`${helpers.fetchAPIURL()}/auth/validate_token`, helpers.genericAuthedGet())
}

export function userLogout() {
  return fetch(`${helpers.fetchAPIURL()}/auth/sign_out`, {
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
  return fetch(`${helpers.fetchAPIURL()}/auth/sign_in`, {
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
  return fetch(`${helpers.fetchAPIURL()}/authed/notifications?mode=forUser&forUser=${userId}`, helpers.genericAuthedGet())
}

export function userRoleFetch(user) {
  return fetch(`${helpers.fetchAPIURL()}/authed/roles/${user.role_id}`, helpers.genericAuthedGet())
}
