export function fetchAPIURL() {
  if (process.env.NODE_ENV === 'production') {
    return "https://thelocus.co"
  } else {
    return `${process.env.REACT_APP_BASE_ENDPOINT}:${process.env.REACT_APP_API_PORT}`
  }
}

export function genericAuthedGet() {
  return {
    method: "GET",
    headers: authedHeaders()
  }
}

export function authedHeaders() {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "access-token": localStorage.accessToken || "",
    "token-type":   "Bearer",
    "client":       localStorage.tokenClient || "",
    "expiry":       localStorage.tokenExpiry || "",
    "uid":          localStorage.uid || ""
  }
}
