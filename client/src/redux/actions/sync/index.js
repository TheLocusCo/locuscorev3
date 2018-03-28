import * as helpers from "../helpers"

export * from './categories.js'
export * from './comments.js'
export * from './db.js'
export * from './resources.js'
export * from './search.js'
export * from './users.js'

export const GENERIC_API_FAILURE = 'GENERIC_API_FAILURE'
export const REMOVE_ERROR_MESSAGE = 'REMOVE_ERROR_MESSAGE'
export const REMOVE_SUCCESS_MESSAGE = 'REMOVE_SUCCESS_MESSAGE'
export const TOGGLE_FULLSCREEN_LIGHTBOX = 'TOGGLE_FULLSCREEN_LIGHTBOX'
export const UPDATE_ACTIVE_CONTACT_FORM = 'UPDATE_ACTIVE_CONTACT_FORM'
export const UPDATE_ERROR_MESSAGES = 'UPDATE_ERROR_MESSAGES'
export const UPDATE_SUCCESS_MESSAGES = 'UPDATE_SUCCESS_MESSAGES'
export const UPDATE_WELCOME_TABS = 'UPDATE_WELCOME_TABS'
export const UPDATE_WELCOME_BUTTON_SLIDERS = 'UPDATE_WELCOME_BUTTON_SLIDERS'

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'
export const REQUEST_COMMENT = 'REQUEST_COMMENT'
export const REQUEST_GRAPHICS = 'REQUEST_GRAPHICS'
export const REQUEST_GRAPHIC = 'REQUEST_GRAPHIC'
export const REQUEST_MANGAS = 'REQUEST_MANGAS'
export const REQUEST_MANGA = 'REQUEST_MANGA'
export const REQUEST_MEDIA = 'REQUEST_MEDIA'
export const REQUEST_MEDIUM = 'REQUEST_MEDIUM'
export const REQUEST_NOTIFICATIONS = 'REQUEST_NOTIFICATIONS'
export const REQUEST_NOTIFICATION = 'REQUEST_NOTIFICATION'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_POST = 'REQUEST_POST'
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
export const REQUEST_PROJECT = 'REQUEST_PROJECT'
export const REQUEST_RESUMES = 'REQUEST_RESUMES'
export const REQUEST_RESUME = 'REQUEST_RESUME'
export const REQUEST_ROLES = 'REQUEST_ROLES'
export const REQUEST_ROLE = 'REQUEST_ROLE'

export function cleanupAfterGallery(mode) {
  var action = {}
  action["type"] = `CLEANUP_AFTER_${mode.toUpperCase()}_GALLERY`

  return action
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
