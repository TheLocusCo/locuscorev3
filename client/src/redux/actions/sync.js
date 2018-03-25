import * as db from "./db"
import * as helpers from "./helpers"

function fetchResumesURL() {
  if (process.env.NODE_ENV === 'production') {
    return "http://thelocus.co"
  } else {
    return `${process.env.REACT_APP_BASE_ENDPOINT}:${process.env.REACT_APP_RESUMES_PORT}`
  }
}

export const GENERIC_API_FAILURE = 'GENERIC_API_FAILURE'
export const CREATE_RESOURCE_FAILURE = 'CREATE_RESOURCE_FAILURE'
export const CREATE_RESOURCE_SUCCESS = 'CREATE_RESOURCE_SUCCESS'
export const DESTROY_RESOURCE_FAILURE = 'DESTROY_RESOURCE_FAILURE'
export const DELETE_EDIT_ITEM = 'DELETE_EDIT_ITEM'
export const DELETE_NEW_ITEM = 'DELETE_NEW_ITEM'
export const DELETE_PREVIEW_COMMENT = 'DELETE_PREVIEW_COMMENT'
export const DELETE_UPLOAD_ITEM = 'DELETE_UPLOAD_ITEM'
//export const DESTROY_RESOURCE_SUCCESS = 'DESTROY_RESOURCE_SUCCESS'
export const EDIT_RESOURCE_FAILURE = 'EDIT_RESOURCE_FAILURE'
export const EDIT_RESOURCE_SUCCESS = 'EDIT_RESOURCE_SUCCESS'
export const EMPTY_CATEGORIES = 'EMPTY_CATEGORIES'
export const FETCH_RESOURCE_FAILURE = 'FETCH_RESOURCE_FAILURE'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'
export const REQUEST_COMMENT = 'REQUEST_COMMENT'
export const REQUEST_CONTACT_FORMS = 'REQUEST_CONTACT_FORMS'
export const REQUEST_EDIT_ITEM = 'REQUEST_EDIT_ITEM'
export const REQUEST_GRAPHICS = 'REQUEST_GRAPHICS'
export const REQUEST_GRAPHIC = 'REQUEST_GRAPHIC'
export const REQUEST_MANGAS = 'REQUEST_MANGAS'
export const REQUEST_MANGA = 'REQUEST_MANGA'
export const REQUEST_MEDIA = 'REQUEST_MEDIA'
export const REQUEST_MEDIUM = 'REQUEST_MEDIUM'
export const REQUEST_AUTHED_NAVIGATION = 'REQUEST_AUTHED_NAVIGATION'
export const RECEIVE_AUTHED_NAVIGATION = 'RECEIVE_AUTHED_NAVIGATION'
export const REQUEST_NAVIGATION = 'REQUEST_NAVIGATION'
export const RECEIVE_NAVIGATION = 'RECEIVE_NAVIGATION'
export const REQUEST_NEW_ITEM = 'REQUEST_NEW_ITEM'
export const REQUEST_NOTIFICATIONS = 'REQUEST_NOTIFICATIONS'
export const REQUEST_NOTIFICATION = 'REQUEST_NOTIFICATION'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_POST = 'REQUEST_POST'
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
export const REQUEST_PROJECT = 'REQUEST_PROJECT'
export const REQUEST_ROLES = 'REQUEST_ROLES'
export const REQUEST_ROLE = 'REQUEST_ROLE'
export const REQUEST_RESUMES = 'REQUEST_RESUMES'
export const REQUEST_RESUME = 'REQUEST_RESUME'
export const REQUEST_SELECTS_FOR_SEARCH = 'REQUEST_SELECTS_FOR_SEARCH'
export const REQUEST_SEARCH_ABILITY = 'REQUEST_SEARCH_ABILITY'
export const RECEIVE_RESUME_HOST = 'RECEIVE_RESUME_HOST'
export const REQUEST_USERS = 'REQUEST_USERS'
export const REQUEST_USER = 'REQUEST_USER'
export const REQUEST_USER_NOTIFICATIONS = 'REQUEST_USER_NOTIFICATIONS'
export const RECEIVE_CONTACT_FORMS = 'RECEIVE_CONTACT_FORMS'
export const REMOVE_ERROR_MESSAGE = 'REMOVE_ERROR_MESSAGE'
export const REMOVE_SUCCESS_MESSAGE = 'REMOVE_SUCCESS_MESSAGE'
export const REMOVE_USER_NOTIFICATION = 'REMOVE_USER_NOTIFICATION'
export const RECEIVE_WELCOME_SHORTCUTS = 'RECEIVE_WELCOME_SHORTCUTS'
export const RECEIVE_ADMIN_SHORTCUTS = 'RECEIVE_ADMIN_SHORTCUTS'
export const RECEIVE_WELCOME_BUTTON_SLIDERS = 'RECEIVE_WELCOME_BUTTON_SLIDERS'
export const UPDATE_WELCOME_BUTTON_SLIDERS = 'UPDATE_WELCOME_BUTTON_SLIDERS'
export const RECEIVE_WELCOME_TABS = 'RECEIVE_WELCOME_TABS'
export const TOGGLE_FULLSCREEN_LIGHTBOX = 'TOGGLE_FULLSCREEN_LIGHTBOX'
export const UPDATE_WELCOME_TABS = 'UPDATE_WELCOME_TABS'
export const UPDATE_ACTIVE_CATEGORY = 'UPDATE_ACTIVE_CATEGORY'
export const UPDATE_ACTIVE_CONTACT_FORM = 'UPDATE_ACTIVE_CONTACT_FORM'
export const UPDATE_COMMENT_FORM_VISIBILITY = 'UPDATE_COMMENT_FORM_VISIBILITY'
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE'
export const UPDATE_CURRENT_SEARCH_MODEL = 'UPDATE_CURRENT_SEARCH_MODEL'
export const UPDATE_CURRENT_SEARCH_FIELDS = 'UPDATE_CURRENT_SEARCH_FIELDS'
export const UPDATE_ERROR_MESSAGES = 'UPDATE_ERROR_MESSAGES'
export const UPDATE_PREVIEW_COMMENT = 'UPDATE_PREVIEW_COMMENT'
export const UPDATE_SUCCESS_MESSAGES = 'UPDATE_SUCCESS_MESSAGES'
export const USER_AUTH_FAILURE = 'USER_AUTH_FAILURE'
export const USER_AUTH_DESTROY = 'USER_AUTH_DESTROY'
export const USER_AUTH = 'USER_AUTH'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE'
export const USER_NEW = 'USER_NEW'

export function cleanupAfterGallery(mode) {
  var action = {}
  action["type"] = `CLEANUP_AFTER_${mode.toUpperCase()}_GALLERY`

  return action
}

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

export function emptyCategories() {
  return {
    type: EMPTY_CATEGORIES
  }
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

export function deletePreviewComment() {
  return {
    type: DELETE_PREVIEW_COMMENT
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

export function dismissError(errorWithKey) {
  return {
    type: REMOVE_ERROR_MESSAGE,
    errorMessage: errorWithKey
  }
}

export function dismissSuccess(successWithKey) {
  return {
    type: REMOVE_SUCCESS_MESSAGE,
    successMessage: successWithKey
  }
}

export function dismissUserNotification(itemId) {
  return {
    type: REMOVE_USER_NOTIFICATION,
    idToCleanup: itemId
  }
}

export function fetchResourceFailure(data) {
  //console.log("TESTING IN FAILURE" + JSON.stringify(data))
  return {
    type: FETCH_RESOURCE_FAILURE,
    errorMessages: [data.error]
  }
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

export function errorMessage(message) {
  return {
    type: UPDATE_ERROR_MESSAGES,
    errorMessages: [{generic: message}]
  }
}

export function errorMessageAsObject(messageObject) {
  let retObj = {}
  retObj[messageObject.error] = messageObject.exception
  return {
    type: UPDATE_ERROR_MESSAGES,
    errorMessages: [retObj]
  }
}

export function genericAPIError(data) {
  console.log("TESTING IN FAILURE" + JSON.stringify(data))
  return {
    type: GENERIC_API_FAILURE,
    //errorLog: data.error
  }
}

export function previewComment(comment) {
  comment.isPreview = true
  comment.created_at = helpers.generateDate()
  comment.receivedAt = Date.now()
  return {
    type: UPDATE_PREVIEW_COMMENT,
    previewComment: comment
  }
}

export function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  }
}

export function requestContactForms() {
  return {
    type: REQUEST_CONTACT_FORMS
  }
}

export function requestEditItem() {
  return {
    type: REQUEST_EDIT_ITEM
  }
}

export function requestComment() {
  return {
    type: REQUEST_COMMENT
  }
}

//export function requestComments() {
//  return {
//    type: REQUEST_COMMENTS
//  }
//}

export function requestGraphics() {
  return {
    type: REQUEST_GRAPHICS
  }
}

export function requestGraphic() {
  return {
    type: REQUEST_GRAPHIC
  }
}

export function requestManga() {
  return {
    type: REQUEST_MANGA
  }
}

//export function requestMangas() {
//  return {
//    type: REQUEST_MANGAS
//  }
//}

export function requestMedium() {
  return {
    type: REQUEST_MEDIUM
  }
}

//export function requestMedia() {
//  return {
//    type: REQUEST_MEDIA
//  }
//}

export function requestNavigation() {
  return {
    type: REQUEST_NAVIGATION
  }
}

export function requestAuthedNavigation() {
  return {
    type: REQUEST_AUTHED_NAVIGATION
  }
}

export function requestNewItem() {
  return {
    type: REQUEST_NEW_ITEM
  }
}

export function requestNotifications() {
  return {
    type: REQUEST_NOTIFICATIONS
  }
}

export function requestNotification() {
  return {
    type: REQUEST_NOTIFICATION
  }
}

export function requestProjects() {
  return {
    type: REQUEST_PROJECTS
  }
}

export function requestProject() {
  return {
    type: REQUEST_PROJECT
  }
}

export function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

export function requestPost() {
  return {
    type: REQUEST_POST
  }
}

//export function requestResumes() {
//  return {
//    type: REQUEST_RESUMES
//  }
//}

export function requestResume() {
  return {
    type: REQUEST_RESUME
  }
}

//export function requestRoles() {
//  return {
//    type: REQUEST_ROLES
//  }
//}

export function requestRole() {
  return {
    type: REQUEST_ROLE
  }
}

//export function requestUsers() {
//  return {
//    type: REQUEST_USERS
//  }
//}

export function requestSearchAbility() {
  return {
    type: REQUEST_SEARCH_ABILITY
  }
}

export function requestSearchFieldData() {
  return {
    type: REQUEST_SELECTS_FOR_SEARCH
  }
}

export function requestUser() {
  return {
    type: REQUEST_USER
  }
}

export function receiveContactForms() {
  return {
    type: RECEIVE_CONTACT_FORMS,
    contactForms: db.contactForms()
  }
}

export function receiveNavigation() {
  return {
    type: RECEIVE_NAVIGATION,
    navigation: db.navigation()
  }
}

export function receiveResumeHost() {
  return {
    type: RECEIVE_RESUME_HOST,
    resumeHost: `${fetchResumesURL()}`
  }
}

export function receiveRoleNavigation(user) {
  return {
    type: RECEIVE_AUTHED_NAVIGATION,
    authedNavigation: db.authenticatedNavigation(user)
  }
}

export function receiveAdminShortcuts(role) {
  return {
    type: RECEIVE_ADMIN_SHORTCUTS,
    adminShortcuts: db.adminShortcuts(role)
  }
}

export function receiveWelcomeShortcuts() {
  return {
    type: RECEIVE_WELCOME_SHORTCUTS,
    welcomeShortcuts: db.welcomeShortcuts()
  }
}

export function receiveWelcomeButtonSliders() {
  return {
    type: RECEIVE_WELCOME_BUTTON_SLIDERS,
    welcomeButtonSliders: db.welcomeButtonSliders()
  }
}

export function setCommentFormVisibility(visible) {
  return {
    type: UPDATE_COMMENT_FORM_VISIBILITY,
    status: visible
  }
}

// UPDATE AS MORE BUTTON SLIDERS ARE ADDED
export function setButtonSliderContent(newContent, mode) {
  switch (mode) {
    case "welcome":
      return {
        type: UPDATE_WELCOME_BUTTON_SLIDERS,
        welcomeButtonSliders: newContent
      }
    default:
      return null
  }
}

export function receiveWelcomeTabs() {
  return {
    type: RECEIVE_WELCOME_TABS,
    welcomeTabs: db.welcomeTabs()
  }
}

// UPDATE AS MORE TABS ARE ADDED
export function setTabContent(newContent, mode) {
  switch (mode) {
    case "welcome":
      return {
        type: UPDATE_WELCOME_TABS,
        welcomeTabs: newContent
      }
    default:
      return null
  }
}

export function setActiveCategory(category) {
  return {
    type: UPDATE_ACTIVE_CATEGORY,
    activeCategory: category.name,
    activeCategoryId: category.id
  }
}

export function setActiveContactForm(contactFormName) {
  return {
    type: UPDATE_ACTIVE_CONTACT_FORM,
    activeContactForm: contactFormName
  }
}

export function successMessage(message) {
  return {
    type: UPDATE_SUCCESS_MESSAGES,
    successMessages: [message]
  }
}

export function toggleFullscreenLightBox() {
  return {
    type: TOGGLE_FULLSCREEN_LIGHTBOX
  }
}

export function updateCurrentPage(resourceType, currentPage) {
  let currentPageObj = {}
  currentPageObj["type"] = UPDATE_CURRENT_PAGE
  currentPageObj["resourceType"] = resourceType
  currentPageObj["currentPage"] = currentPage

  return currentPageObj
}

export function updateCurrentSearchFields(field) {
  return {
    type: UPDATE_CURRENT_SEARCH_FIELDS,
    field: field
  }
}

export function updateCurrentSearchModel(model) {
  return {
    type: UPDATE_CURRENT_SEARCH_MODEL,
    model: model
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
    errorMessages: [data.error]
  }
}

export function userLoginFailure(data) {
  //console.log("TESTING IN FAILURE" + JSON.stringify(data))
  return {
    type: USER_LOGIN_FAILURE,
    errorMessages: [data.error]
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
