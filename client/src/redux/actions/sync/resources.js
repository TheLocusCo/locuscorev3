export const CREATE_RESOURCE_FAILURE = 'CREATE_RESOURCE_FAILURE'
export const CREATE_RESOURCE_SUCCESS = 'CREATE_RESOURCE_SUCCESS'
export const DELETE_EDIT_ITEM = 'DELETE_EDIT_ITEM'
export const DELETE_NEW_ITEM = 'DELETE_NEW_ITEM'
export const DELETE_UPLOAD_ITEM = 'DELETE_UPLOAD_ITEM'
export const DESTROY_RESOURCE_FAILURE = 'DESTROY_RESOURCE_FAILURE'
//export const DESTROY_RESOURCE_SUCCESS = 'DESTROY_RESOURCE_SUCCESS'
export const EDIT_RESOURCE_FAILURE = 'EDIT_RESOURCE_FAILURE'
export const EDIT_RESOURCE_SUCCESS = 'EDIT_RESOURCE_SUCCESS'
export const FETCH_RESOURCE_FAILURE = 'FETCH_RESOURCE_FAILURE'
export const REQUEST_EDIT_ITEM = 'REQUEST_EDIT_ITEM'
export const REQUEST_NEW_ITEM = 'REQUEST_NEW_ITEM'
export const REQUEST_SHOW_ITEM = 'RECEIVE_SHOW_ITEM'
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE'

export function createResourceFailure(data) {
  return {
    type: CREATE_RESOURCE_FAILURE,
    errorMessages: data.errors
  }
}

export function createResourceSuccess(resourceType, resource) {
  var resourceObject = {}
  resourceObject["type"] = "RECEIVE_" + resourceType.toUpperCase();
  resourceObject[resourceType] = resource
  resourceObject["receivedAt"] = Date.now()

  return resourceObject
}

export function deleteEditItem() {
  return {
    type: DELETE_EDIT_ITEM
  }
}

export function deleteNewItem() {
  return {
    type: DELETE_NEW_ITEM
  }
}

export function deleteUploadItem() {
  return {
    type: DELETE_UPLOAD_ITEM
  }
}

export function destroyResourceFailure(data) {
  return {
    type: DESTROY_RESOURCE_FAILURE,
    errorMessages: data.errors
  }
}

export function destroyResourceSuccess(resourceType, resource) {
  var resourceObject = {}
  resourceObject["type"] = "CLEANUP_AFTER_DESTROY_" + resourceType.toUpperCase();
  resourceObject["idToCleanup"] = resource.id

  return resourceObject
}

export function editResourceFailure(data) {
  //console.log("TESTING IN FAILURE" + JSON.stringify(data))
  return {
    type: EDIT_RESOURCE_FAILURE,
    errorMessages: data.errors
  }
}

export function editResourceSuccess(resourceType, resource) {
  var resourceObject = {}
  resourceObject["type"] = "RECEIVE_" + resourceType.toUpperCase();
  resourceObject[resourceType] = resource
  resourceObject["receivedAt"] = Date.now()

  return resourceObject
}

export function fetchResourceFailure(data) {
  //console.log("TESTING IN FAILURE" + JSON.stringify(data))
  return {
    type: FETCH_RESOURCE_FAILURE,
    errorMessages: [data.error]
  }
}

export function requestEditItem() {
  return {
    type: REQUEST_EDIT_ITEM
  }
}

export function requestNewItem() {
  return {
    type: REQUEST_NEW_ITEM
  }
}

export function requestShowItem() {
  return {
    type: REQUEST_SHOW_ITEM
  }
}

export function updateCurrentPage(resourceType, currentPage) {
  let currentPageObj = {}
  currentPageObj["type"] = UPDATE_CURRENT_PAGE
  currentPageObj["resourceType"] = resourceType
  currentPageObj["currentPage"] = currentPage

  return currentPageObj
}
