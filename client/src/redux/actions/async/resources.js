import * as http from "../http"
import * as sync from "../sync"

export const RECEIVE_EDIT_ITEM = 'RECEIVE_EDIT_ITEM'
export const RECEIVE_NEW_ITEM = 'RECEIVE_NEW_ITEM'
export const RECEIVE_UPLOAD_ITEM = 'RECEIVE_UPLOAD_ITEM'

export function fetchNewResource(resource) {
  return dispatch => {
    dispatch(sync.requestNewItem())
    http.resourceNewFetch(resource).then(
      response => response.json()
    ).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("field_meta")) {
        dispatch(receiveNewItem(resource, response))
      } else {
        dispatch(sync.fetchResourceFailure(response))
      }
    })
  }
}

export function fetchResource(resourceType, resourcePlural, id) {
  return dispatch => {
    dispatch(sync.requestShowItem())
    http.resourceFetch(resourcePlural, id).then(
      response => response.json()
    ).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
        dispatch(receiveResource(resourceType, response))
        switch (resourceType) {
          case "medium":
            return dispatch(receiveUploadItem(response))
          case "resume":
            return dispatch(sync.receiveResumeHost())
          default:
            return null
        }
      } else {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveResource(resourceType, {data: {}}))
      }
    })
  }
}

export function fetchResourceForEdit(resource, id) {
  return dispatch => {
    dispatch(sync.requestEditItem())
    http.resourceFetchForEdit(resource, id).then(
      response => response.json()
    ).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
        dispatch(receiveEditItem(resource, response))
      } else {
        dispatch(sync.errorMessageAsObject(response))
      }
    })
  }
}

export function fetchResources(resourceType, currentPage, params, mode) {
  return dispatch =>
    http.resourcesFetch(resourceType, currentPage, params, mode).then(
      response => response.json()
    ).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveResources(resourceType, response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveResources(resourceType, {data: []}))
      }
    })
}

function receiveEditItem(resourceType, json) {
  // Need to do date transformations so redux form material ui knows how to display these
  switch (resourceType) {
    case "notifications":
      json.data.start_displaying_at = new Date(json.data.start_displaying_at)
      json.data.stops_displaying_at = new Date(json.data.stops_displaying_at)
      break
    case "posts":
      json.data.published_at = new Date(json.data.published_at)
      break
    default:
      break
  }
  return {
    type: RECEIVE_EDIT_ITEM,
    resource: json.data,
    resourceType: resourceType,
    receivedAt: Date.now()
  }
}

function receiveNewItem(resourceType, json) {
  return {
    type: RECEIVE_NEW_ITEM,
    resource: json.data,
    resourceType: resourceType,
    receivedAt: Date.now()
  }
}

//SINGULAR resourceTYPE
export function receiveResource(resourceType, json) {
  let resourcesObj = {}
  resourcesObj["type"] = "RECEIVE_" + resourceType.toUpperCase()
  resourcesObj[resourceType] = json.data
  resourcesObj["receivedAt"] = Date.now()

  return resourcesObj
}

// PLURAL
export function receiveResources(resourceType, json) {
  let resourcesObj = {}
  resourcesObj["type"] = "RECEIVE_" + resourceType.toUpperCase()
  resourcesObj[resourceType] = json.data
  resourcesObj["receivedAt"] = Date.now()
  resourcesObj["totalPages"] = json.total_pages
  resourcesObj.paginationMeta = json.pagination_meta

  if (resourcesObj.type === "RECEIVE_SEARCH_RESULTS") {
    resourcesObj["model"] = json.data.model
    resourcesObj["results"] = json.data.results
    resourcesObj["params"] = json.data.params
  }

  return resourcesObj
}

export function resourceDestroy(resource, history) {
  return dispatch =>
    http.resourceDestroy(resource.field_meta.resource_plural, resource).then(
      response => response
    ).then(response => {
      if (response.ok) {
        dispatch(sync.destroyResourceSuccess(resource.field_meta.resource_type, resource))
        if (resource.meta_title) {
          dispatch(sync.successMessage("Successfully destroyed " + resource.field_meta.resource_type + " \"" + resource.meta_title + "\""))
        } else {
          dispatch(sync.successMessage("Successfully destroyed " + resource.field_meta.resource_type))
        }
        dispatch(fetchResources(resource.field_meta.resource_plural, 1))
        history.push("/" + resource.field_meta.resource_plural)
      } else {
        dispatch(sync.destroyResourceFailure(response))
        if (resource.meta_title) {
          dispatch(sync.errorMessage("Something went wrong with destroying the " + resource.field_meta.resource_type + " \"" + resource.meta_title + "\""))
        } else {
          dispatch(sync.errorMessage("Something went wrong with destroying the " + resource.field_meta.resource_type))
        }
      }
    })
}

export function receiveUploadItem(json) {
  return {
    type: RECEIVE_UPLOAD_ITEM,
    resource: json.data,
    receivedAt: Date.now()
  }
}

export function resourceEdit(resource, history) {
  return dispatch =>
    http.resourcePatch(resource.field_meta.resource_plural, resource.field_meta.resource_type, resource).then(
      response => response.json()
    ).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
        dispatch(sync.editResourceSuccess(resource.field_meta.resource_type, response.data))
        dispatch(sync.deleteEditItem())
        dispatch(sync.successMessage("Successfully updated " + resource.field_meta.resource_type + " \"" + resource.meta_title + "\""))
        history.push(resource.href)
      } else {
        dispatch(sync.editResourceFailure(response))
      }
    })
}

export function resourceNew(resource, history) {
  return dispatch =>
    http.resourceCreate(resource.field_meta.resource_plural, resource.field_meta.resource_type, resource).then(
      response => response.json()
    ).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
        dispatch(sync.createResourceSuccess(resource.field_meta.resource_type, response.data))
        dispatch(sync.deleteNewItem())
        dispatch(sync.successMessage("Successfully created " + resource.field_meta.resource_type))
        history.push(response.data.href)
      } else {
        dispatch(sync.createResourceFailure(response))
      }
    })
}

export function resourceUpload(resource) {
  return dispatch =>
    http.resourceUpload(resource.field_meta.resource_plural, resource.field_meta.resource_type, resource).then(
      response => response.json()
    ).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
        // dispatch(sync.editResourceSuccess(resource.field_meta.resource_type, response.data))
        dispatch(receiveResource(resource.field_meta.resource_type, response))
        dispatch(sync.successMessage("Successfully uploaded data for " + resource.field_meta.resource_type + " \"" + resource.meta_title + "\""))
      } else {
        // dispatch(sync.editResourceFailure(response))
      }
    })
}

export function updateCurrentPage(resourceType, currentPage, params) {
  return dispatch => {
    dispatch(sync.updateCurrentPage(resourceType, currentPage))
    dispatch(fetchResources(resourceType, currentPage, params, "paginated"))
  }
}
