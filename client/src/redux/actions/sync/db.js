import * as db from 'redux/actions/db.js'

export const RECEIVE_ADMIN_SHORTCUTS = 'RECEIVE_ADMIN_SHORTCUTS'
export const RECEIVE_CONTACT_FORMS = 'RECEIVE_CONTACT_FORMS'
export const RECEIVE_NAVIGATION = 'RECEIVE_NAVIGATION'
export const RECEIVE_RESUME_HOST = 'RECEIVE_RESUME_HOST'
export const RECEIVE_TABLE_HEADERS = 'RECEIVE_TABLE_HEADERS'
export const RECEIVE_WELCOME_BUTTON_SLIDERS = 'RECEIVE_WELCOME_BUTTON_SLIDERS'
export const RECEIVE_WELCOME_SHORTCUTS = 'RECEIVE_WELCOME_SHORTCUTS'
export const RECEIVE_WELCOME_TABS = 'RECEIVE_WELCOME_TABS'
export const REQUEST_CONTACT_FORMS = 'REQUEST_CONTACT_FORMS'
export const REQUEST_AUTHED_NAVIGATION = 'REQUEST_AUTHED_NAVIGATION'
export const REQUEST_NAVIGATION = 'REQUEST_NAVIGATION'

export function receiveAdminShortcuts(role) {
  return {
    type: RECEIVE_ADMIN_SHORTCUTS,
    adminShortcuts: db.adminShortcuts(role)
  }
}

export function requestAuthedNavigation() {
  return {
    type: REQUEST_AUTHED_NAVIGATION
  }
}

export function receiveContactForms(formMode) {
  return {
    type: RECEIVE_CONTACT_FORMS,
    contactForms: db.contactForms(formMode)
  }
}

export function receiveNavigation() {
  return {
    type: RECEIVE_NAVIGATION,
    navigation: db.navigation()
  }
}

export function receiveTableHeaders() {
  return {
    type: RECEIVE_TABLE_HEADERS,
    tree: db.tableHeaders()
  }
}

export function receiveWelcomeShortcuts() {
  return {
    type: RECEIVE_WELCOME_SHORTCUTS,
    welcomeShortcuts: db.welcomeShortcuts()
  }
}

export function receiveWelcomeButtonSliders(withoutMode) {
  return {
    type: RECEIVE_WELCOME_BUTTON_SLIDERS,
    welcomeButtonSliders: db.welcomeButtonSliders(withoutMode)
  }
}

export function requestContactForms() {
  return {
    type: REQUEST_CONTACT_FORMS
  }
}

export function requestNavigation() {
  return {
    type: REQUEST_NAVIGATION
  }
}

export function receiveWelcomeTabs() {
  return {
    type: RECEIVE_WELCOME_TABS,
    welcomeTabs: db.welcomeTabs()
  }
}
