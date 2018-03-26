import * as http from "./http"
import * as sync from "./sync"
import * as helpers from "./helpers"

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const RECEIVE_EDIT_ITEM = 'RECEIVE_EDIT_ITEM'
export const RECEIVE_NEW_ITEM = 'RECEIVE_NEW_ITEM'
export const RECEIVE_UPLOAD_ITEM = 'RECEIVE_UPLOAD_ITEM'
export const RECEIVE_GRAPHICS = 'RECEIVE_GRAPHICS'
export const RECEIVE_GRAPHIC = 'RECEIVE_GRAPHIC'
export const RECEIVE_MANGAS = 'RECEIVE_MANGAS'
export const RECEIVE_MANGA = 'RECEIVE_MANGA'
export const RECEIVE_MEDIA = 'RECEIVE_MEDIA'
export const RECEIVE_MEDIUM = 'RECEIVE_MEDIUM'
export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS'
export const RECEIVE_NOTIFICATION = 'RECEIVE_NOTIFICATION'
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_RESUMES = 'RECEIVE_RESUMES'
export const RECEIVE_RESUME = 'RECEIVE_RESUME'
export const RECEIVE_ROLES = 'RECEIVE_ROLES'
export const RECEIVE_ROLE = 'RECEIVE_ROLE'
export const RECEIVE_SEARCH_ABILITY = 'RECEIVE_SEARCH_ABILITY'
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'
export const RECEIVE_SELECTS_FOR_SEARCH = 'RECEIVE_SELECTS_FOR_SEARCH'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_USER_NOTIFICATIONS = 'RECEIVE_USER_NOTIFICATIONS'

function setLocalStorageFromHeaders(headers) {
  if(headers.has("access-token")) {
    localStorage.accessToken = headers.get("access-token")
    localStorage.tokenClient = headers.get("client")
    localStorage.tokenExpiry = headers.get("expiry")

    return true
  } else {
    return false
  }
}

function receiveCategories(json) {
  return {
    type: RECEIVE_CATEGORIES,
    categories: json.data,
    receivedAt: Date.now()
  }
}

function receiveComments(json) {
  return {
    type: RECEIVE_COMMENTS,
    comments: json.data,
    receivedAt: Date.now(),
    totalPages: json.total_pages,
    paginationMeta: json.pagination_meta
  }
}

function receiveComment(json) {
  return {
    type: RECEIVE_COMMENT,
    comment: json.data,
    receivedAt: Date.now()
  }
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

function receiveGraphics(json) {
  return {
    type: RECEIVE_GRAPHICS,
    graphics: json.data,
    receivedAt: Date.now(),
    totalPages: json.total_pages,
    paginationMeta: json.pagination_meta
  }
}

function receiveGraphic(json) {
  return {
    type: RECEIVE_GRAPHIC,
    graphic: json.data,
    receivedAt: Date.now()
  }
}

function receiveMangas(json) {
  return {
    type: RECEIVE_MANGAS,
    mangas: json.data,
    receivedAt: Date.now(),
    totalPages: json.total_pages,
    paginationMeta: json.pagination_meta
  }
}

function receiveManga(json) {
  return {
    type: RECEIVE_MANGA,
    manga: json.data,
    receivedAt: Date.now()
  }
}

function receiveMedia(json) {
  return {
    type: RECEIVE_MEDIA,
    media: json.data,
    receivedAt: Date.now(),
    totalPages: json.total_pages,
    paginationMeta: json.pagination_meta
  }
}

function receiveMedium(json) {
  return {
    type: RECEIVE_MEDIUM,
    medium: json.data,
    receivedAt: Date.now()
  }
}

function receiveNotifications(json) {
  return {
    type: RECEIVE_NOTIFICATIONS,
    notifications: json.data,
    receivedAt: Date.now(),
    totalPages: json.total_pages,
    paginationMeta: json.pagination_meta
  }
}

function receiveNotification(json) {
  return {
    type: RECEIVE_NOTIFICATION,
    notification: json.data,
    receivedAt: Date.now()
  }
}

function receiveProjects(json) {
  return {
    type: RECEIVE_PROJECTS,
    projects: json.data,
    receivedAt: Date.now(),
    totalPages: json.total_pages,
    paginationMeta: json.pagination_meta
  }
}

function receiveProject(json) {
  return {
    type: RECEIVE_PROJECT,
    project: json.data,
    receivedAt: Date.now()
  }
}

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.data,
    receivedAt: Date.now(),
    totalPages: json.total_pages,
    paginationMeta: json.pagination_meta
  }
}

function receivePost(json) {
  return {
    type: RECEIVE_POST,
    post: json.data,
    receivedAt: Date.now()
  }
}

//SINGULAR resourceTYPE
function receiveResource(resourceType, json) {
  let resourcesObj = {}
  resourcesObj["type"] = "RECEIVE_" + resourceType.toUpperCase()
  resourcesObj[resourceType] = json.data
  resourcesObj["receivedAt"] = Date.now()

  return resourcesObj
}

// PLURAL
function receiveResources(resourceType, json) {
  let resourcesObj = {}
  resourcesObj["type"] = "RECEIVE_" + resourceType.toUpperCase()
  resourcesObj[resourceType] = json.data
  resourcesObj["receivedAt"] = Date.now()
  resourcesObj["totalPages"] = json.total_pages
  resourcesObj.paginationMeta = json.pagination_meta

  return resourcesObj
}

function receiveResumes(json) {
  return {
    type: RECEIVE_RESUMES,
    resumes: json.data,
    receivedAt: Date.now(),
    totalPages: json.total_pages,
    paginationMeta: json.pagination_meta
  }
}

function receiveResume(json) {
  return {
    type: RECEIVE_RESUME,
    resume: json.data,
    receivedAt: Date.now()
  }
}

function receiveRoles(json) {
  return {
    type: RECEIVE_ROLES,
    roles: json.data,
    receivedAt: Date.now(),
    totalPages: json.total_pages,
    paginationMeta: json.pagination_meta
  }
}

function receiveRole(json) {
  return {
    type: RECEIVE_ROLE,
    role: json.data,
    receivedAt: Date.now()
  }
}

function receiveSearchAbility(json) {
  return {
    type: RECEIVE_SEARCH_ABILITY,
    searchAbility: json.data,
    receivedAt: Date.now()
  }
}

function receiveSearchResults(json) {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results: json.data.results,
    model: json.data.model,
    params: json.data.params
  }
}

function receiveSelectsForSearch(field, json) {
  return {
    type: RECEIVE_SELECTS_FOR_SEARCH,
    field: field,
    results: json.data
  }
}

function receiveUploadItem(json) {
  return {
    type: RECEIVE_UPLOAD_ITEM,
    resource: json.data,
    receivedAt: Date.now()
  }
}

function receiveUsers(json) {
  return {
    type: RECEIVE_USERS,
    users: json.data,
    receivedAt: Date.now(),
    totalPages: json.total_pages,
    paginationMeta: json.pagination_meta
  }
}

function receiveUser(json) {
  return {
    type: RECEIVE_USER,
    user: json.data,
    receivedAt: Date.now()
  }
}

function receiveUserNotifications(json) {
  return {
    type: RECEIVE_USER_NOTIFICATIONS,
    userNotifications: json.data,
    receivedAt: Date.now()
  }
}

export function deleteUploadItem() {
  return dispatch => {
    dispatch(sync.deleteUploadItem())
  }
}

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

export function fetchContactForms() {
  return dispatch => {
    return dispatch(sync.receiveContactForms())
  }
}

export function fetchAdminShortcuts(role) {
  return dispatch => {
    return dispatch(sync.receiveAdminShortcuts(role))
  }
}

export function fetchWelcomeShortcuts() {
  return dispatch => {
    return dispatch(sync.receiveWelcomeShortcuts())
  }
}

export function fetchWelcomeButtonSliders() {
  return dispatch => {
    return dispatch(sync.receiveWelcomeButtonSliders())
  }
}

export function setCommentFormVisibility(visible) {
  return dispatch => {
    return dispatch(sync.setCommentFormVisibility(visible))
  }
}

export function setButtonSliderContent(newContent, mode) {
  return dispatch => {
    return dispatch(sync.setButtonSliderContent(newContent, mode))
  }
}

export function fetchWelcomeTabs() {
  return dispatch => {
    return dispatch(sync.receiveWelcomeTabs())
  }
}

export function setTabContent(newContent, mode) {
  return dispatch => {
    return dispatch(sync.setTabContent(newContent, mode))
  }
}

export function fetchCategories(type) {
  return dispatch => {
    dispatch(sync.requestCategories())
    return http.categoriesFetch(type)
      .then(response => response.json())
      .then(json => dispatch(receiveCategories(json)))
  }
}

export function fetchComment(id) {
  return dispatch =>
    http.commentFetch(id).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveComment(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveComment({data: {}}))
      }
    })
}

export function fetchComments(page) {
  return dispatch =>
    http.commentsFetch(page).then(
      response => response.json()
    ).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveComments(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveComments({data: []}))
      }
    })
}

export function fetchGraphics(page) {
  return dispatch => {
    dispatch(sync.requestGraphics())
    return http.graphicsFetch(page)
      .then(response => response.json())
      .then(json => dispatch(receiveGraphics(json)))
  }
}

export function fetchGraphic(id) {
  return dispatch =>
    http.graphicFetch(id).then(
      response => response.json()
    ).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveGraphic(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveGraphic({data: {}}))
      }
    })
}

export function fetchManga(id) {
  return dispatch =>
    http.mangaFetch(id).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveManga(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveManga({data: {}}))
      }
    })
}

export function fetchMangas(fetchMode, page) {
  return dispatch =>
    http.mangasFetch(fetchMode, page).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveMangas(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveMangas({data: []}))
      }
    })
}

export function fetchMedium(id) {
  return dispatch =>
    http.mediumFetch(id).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveMedium(response))
        dispatch(receiveUploadItem(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveMedium({data: {}}))
      }
    })
}

export function fetchMedia(mode, page) {
  return dispatch =>
    http.mediaFetch(mode, page).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveMedia(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveMedia({data: []}))
      }
    })
}

export function fetchNavigation() {
  return dispatch => {
    return dispatch(sync.receiveNavigation())
  }
}

export function fetchNotification(id) {
  return dispatch =>
    http.notificationFetch(id).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveNotification(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveNotification({data: {}}))
      }
    })
}

export function fetchNotifications(page) {
  return dispatch =>
    http.notificationsFetch(page).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveNotifications(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveNotifications({data: []}))
      }
    })
}

export function fetchProjects(fetchMode, page) {
  return dispatch => {
    dispatch(sync.requestProjects())
    return http.projectsFetch(fetchMode, page)
      .then(response => response.json())
      .then(json => dispatch(receiveProjects(json)))
  }
}

export function fetchProject(id) {
  return dispatch =>
    http.projectFetch(id).then(
      response => response.json()
    ).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveProject(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveProject({data: {}}))
      }
    })
}

export function fetchPosts(fetchMode, page) {
  return dispatch => {
    dispatch(sync.requestPosts())
    return http.postsFetch(fetchMode, page)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}

export function fetchPost(id) {
  return dispatch =>
    http.postFetch(id).then(
      response => response.json()
    ).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receivePost(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receivePost({data: {}}))
      }
    })
}

export function fetchRoleNavigation(user) {
  return dispatch => {
    return dispatch(sync.receiveRoleNavigation(user))
  }
}

export function fetchNewResource(resource) {
  return dispatch => {
    dispatch(sync.requestNewItem())
    http.resourceNewFetch(resource).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("field_meta")) {
        dispatch(receiveNewItem(resource, response))
      } else {
        dispatch(sync.fetchResourceFailure(response))
      }
    })
  }
}

export function fetchResource(resource, id) {
  return dispatch => {
    dispatch(sync.requestEditItem())
    http.resourceFetch(resource, id).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
        dispatch(receiveEditItem(resource, response))
      } else {
        dispatch(sync.fetchResourceFailure(response))
      }
    })
  }
}

export function fetchResources(resourceType, currentPage) {
  return dispatch =>
    http.resourcesFetch(resourceType, currentPage).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveResources(resourceType, response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveResources(resourceType, {data: []}))
      }
    })
}

export function fetchResume(id) {
  return dispatch =>
    http.resumeFetch(id).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveResume(response))
        dispatch(sync.receiveResumeHost())
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveResume({data: {}}))
      }
    })
}

export function fetchResumeHost() {
  return dispatch => {
    return dispatch(sync.receiveResumeHost())
  }
}

export function fetchResumes(page) {
  return dispatch =>
    http.resumesFetch(page).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveResumes(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveResumes({data: []}))
      }
    })
}

export function fetchRole(id) {
  return dispatch =>
    http.roleFetch(id).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveRole(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveRole({data: {}}))
      }
    })
}

export function fetchRoles(page) {
  return dispatch =>
    http.rolesFetch(page).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveRoles(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveRoles({data: []}))
      }
    })
}

export function fetchSearchAbility(currentUserId) {
  return dispatch => {
    dispatch(sync.requestSearchAbility())
    return http.searchAbilityFetch(currentUserId)
      .then(response => response.json())
      .then(json => dispatch(receiveSearchAbility(json)))
  }
}

export function fetchShowMedium(id, type) {
  return dispatch =>
    http.showMediumFetch(id, type).then(
      response => response.json()
    ).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveMedium(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveMedium({data: {}}))
      }
    })
}

export function fetchUser(id) {
  return dispatch =>
    http.userFetch(id).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveUser(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveUser({data: {}}))
      }
    })
}

export function fetchUsers(page) {
  return dispatch =>
    http.usersFetch(page).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveUsers(response))
      } else if (Object.keys(response).includes("error")) {
        dispatch(sync.errorMessageAsObject(response))
        dispatch(receiveUsers({data: []}))
      }
    })
}

export function fetchUserNotifications(userId) {
  return dispatch =>
    http.userNotificationsFetch(userId).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

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

export function createNotification(notification) {
  return dispatch =>
    http.notificationCreate(notification).then(
      response => response.json()
    ).then(response => {
      if (!Object.keys(response).includes("data") && !Object.keys(response.data).includes("id")) {
        dispatch(sync.createResourceFailure(response))
      }
    })
}

export function createComment(comment, resourceTypeToFetch, resourceId) {
  comment[resourceTypeToFetch] = {}
  comment[resourceTypeToFetch].id = resourceId
  return dispatch =>
    http.commentCreate(comment).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
        let message = "A comment was added to the system by " + comment.poster_name + "!"
        dispatch(setupAndCreateNotification(message, comment.poster_name, comment.poster_email, "chat"))
        dispatch(sync.successMessage("Your comment was successfully submitted for approval"))
        dispatch(removePreviewCommentAndSetCommentFormVisibility())
        switch (resourceTypeToFetch) {
          case "graphic":
            return dispatch(fetchGraphic(resourceId))
          case "manga":
            return dispatch(fetchManga(resourceId))
          case "post":
            return dispatch(fetchPost(resourceId))
          case "project":
            return dispatch(fetchProject(resourceId))
          default:
            return null
        }
      } else {
        dispatch(sync.createResourceFailure(response))
      }
    })
}

export function previewComment(comment) {
  return dispatch =>
    dispatch(sync.previewComment(comment))
}

export function resourceDestroy(resource, history) {
  return dispatch =>
    http.resourceDestroy(resource.field_meta.resource_plural, resource).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response
    }).then(response => {
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

export function removePreviewCommentAndSetCommentFormVisibility() {
  return dispatch => {
    dispatch(sync.deletePreviewComment())
    dispatch(sync.setCommentFormVisibility(false))
  }
}

export function resourceEdit(resource, history) {
  return dispatch =>
    http.resourcePatch(resource.field_meta.resource_plural, resource.field_meta.resource_type, resource).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
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
    http.resourceCreate(resource.field_meta.resource_plural, resource.field_meta.resource_type, resource).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
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
    http.resourceUpload(resource.field_meta.resource_plural, resource.field_meta.resource_type, resource).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
        // dispatch(sync.editResourceSuccess(resource.field_meta.resource_type, response.data))
        dispatch(receiveResource(resource.field_meta.resource_type, response))
        dispatch(sync.successMessage("Successfully uploaded data for " + resource.field_meta.resource_type + " \"" + resource.meta_title + "\""))
      } else {
        // dispatch(sync.editResourceFailure(response))
      }
    })
}

export function searchCleanupCurrentSearch(field) {
  return dispatch =>
    dispatch(sync.deleteFieldFromCurrentSearch(field))
}

export function searchSubmit(values, history) {
  return dispatch => {
    let params = new URLSearchParams(Object.entries(values))
    http.searchSubmit(params).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(sync.deleteCurrentSearch())
        dispatch(receiveSearchResults(response.data))
        history.push(`/search_results?${params}`)
      } else {
        dispatch(sync.errorMessageAsObject(response))
      }
    })
  }
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

export function updateCurrentPage(resourceType, currentPage) {
  return dispatch => {
    dispatch(sync.updateCurrentPage(resourceType, currentPage))
    dispatch(fetchResources(resourceType, currentPage))
  }
}

export function updateCurrentSearchFieldData(model, field, type, nestedAction, changeFunc) {
  if (nestedAction != null && nestedAction.select_from != null) {
    return dispatch => {
      dispatch(sync.requestSearchFieldData())
      http.searchFieldDataFetch(model, field).then(function(response) {
        //setLocalStorageFromHeaders(response.headers)

        return response.json()
      }).then(response => {
        if (Object.keys(response).includes("data")) {
          dispatch(receiveSelectsForSearch(field, response))
        } else {
          dispatch(sync.errorMessageAsObject(response))
        }
      })
    }
  } else {
    return dispatch => {
      if (type === "hidden") {
        dispatch(changeFunc(field, true, null))
        dispatch(sync.updateCurrentSearchFields(field))
      } else {
        dispatch(sync.updateCurrentSearchFields(field))
      }
    }
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
      setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
        dispatch(userRoleForAuthSuccess(response.data))
        dispatch(sync.successMessage("Welcome Back!"))
      } else {
        dispatch(sync.userAuthFailure(response))
      }
    })
  }
}

export function userLogin(user) {
  return dispatch =>
    http.userLogin(user).then(function(response) {
      setLocalStorageFromHeaders(response.headers)

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
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
        user.role = response.data
        dispatch(sync.userAuthSuccess(user))
      } else {
        dispatch(sync.userLoginFailure(response))
      }
    })
}
