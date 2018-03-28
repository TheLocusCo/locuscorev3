import * as http from "../http"
import * as sync from "../sync"
import * as helpers from "../helpers"

export function createNotification(notification) {
  return dispatch =>
    http.resourceCreate('notifications', 'notification', notification).then(
      response => response.json()
    ).then(response => {
      if (!Object.keys(response).includes("data") && !Object.keys(response.data).includes("id")) {
        dispatch(sync.createResourceFailure(response))
      }
    })
}

export function setupAndCreateNotification(content, from_name, from_email, icon) {
  const currentDate = helpers.generateDate()
  const oneYearFromNow = helpers.generateDate("oneYearFromNow")
  const notification = {
    from_name: from_name,
    from_email: from_email,
    icon: icon,
    content: content,
    start_displaying_at: currentDate,
    stops_displaying_at: oneYearFromNow
  }
  return dispatch =>
    dispatch(createNotification(notification))
}
