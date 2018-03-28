import * as http from "../http"
import * as sync from "../sync"

import { receiveResource } from "./resources.js"

export function fetchShowMedium(id, type) {
  return dispatch =>
    http.showMediumFetch(id, type).then(
      response => response.json()
    ).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveResource('medium', response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveResource('medium', {data: {}}))
      }
    })
}
