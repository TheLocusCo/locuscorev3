import * as sync from 'redux/actions/sync'

export * from 'redux/actions/async/categories.js'
export * from 'redux/actions/async/comments.js'
export * from 'redux/actions/async/media.js'
export * from 'redux/actions/async/notifications.js'
export * from 'redux/actions/async/resources.js'
export * from 'redux/actions/async/search.js'
export * from 'redux/actions/async/users.js'

export const RECEIVE_GRAPHICS = 'RECEIVE_GRAPHICS'
export const RECEIVE_GRAPHIC = 'RECEIVE_GRAPHIC'
export const RECEIVE_MANGAS = 'RECEIVE_MANGAS'
export const RECEIVE_MANGA = 'RECEIVE_MANGA'
export const RECEIVE_MEDIA = 'RECEIVE_MEDIA'
export const RECEIVE_MEDIUM = 'RECEIVE_MEDIUM'
export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS'
export const RECEIVE_NOTIFICATION = 'RECEIVE_NOTIFICATION'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'
export const RECEIVE_RESUMES = 'RECEIVE_RESUMES'
export const RECEIVE_RESUME = 'RECEIVE_RESUME'
export const RECEIVE_ROLES = 'RECEIVE_ROLES'
export const RECEIVE_ROLE = 'RECEIVE_ROLE'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_VISITS = 'RECEIVE_VISITS'
export const RECEIVE_VISIT = 'RECEIVE_VISIT'

export function deleteUploadItem() {
  return dispatch => {
    dispatch(sync.deleteUploadItem())
  }
}

export function fetchContactForms(formMode) {
  return dispatch => {
    return dispatch(sync.receiveContactForms(formMode))
  }
}

export function fetchAdminShortcuts(role) {
  return dispatch => {
    return dispatch(sync.receiveAdminShortcuts(role))
  }
}

export function fetchResumeHost() {
  return dispatch => {
    return dispatch(sync.receiveResumeHost())
  }
}

export function fetchWelcomeShortcuts() {
  return dispatch => {
    return dispatch(sync.receiveWelcomeShortcuts())
  }
}

export function fetchWelcomeButtonSliders(withoutMode) {
  return dispatch => {
    return dispatch(sync.receiveWelcomeButtonSliders(withoutMode))
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

export function fetchNavigation() {
  return dispatch => {
    return dispatch(sync.receiveNavigation())
  }
}

export function fetchRoleNavigation(user) {
  return dispatch => {
    return dispatch(sync.receiveRoleNavigation(user))
  }
}
