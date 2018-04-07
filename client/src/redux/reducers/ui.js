import * as sync from '../actions/sync'

export function activeCategory(
  state = {
    name: "All Categories",
    id: 0
  },
  action
) {
  switch (action.type) {
    case sync.UPDATE_ACTIVE_CATEGORY:
      return Object.assign({}, state, {
        name: action.activeCategory,
        id: action.activeCategoryId
      })
    default:
      return state
  }
}

export function activeContactForm(
  state = {
    name: "Classy"
  },
  action
) {
  switch (action.type) {
    case sync.UPDATE_ACTIVE_CONTACT_FORM:
      return Object.assign({}, state, {
        name: action.activeContactForm,
      })
    default:
      return state
  }
}

export function adminShortcuts(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case sync.RECEIVE_ADMIN_SHORTCUTS:
      return Object.assign({}, state, {
        items: action.adminShortcuts,
      })
    default:
      return state
  }
}

export function apiUrl(
  state = {
    url: ""
  },
  action
) {
  switch (action.type) {
    case sync.RECEIVE_API_URL:
      return Object.assign({}, state, {
        url: action.apiUrl
      })
    default:
      return state
  }
}

export function authedNavigation(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_AUTHED_NAVIGATION:
      return Object.assign({}, state, {
      })
      case sync.RECEIVE_AUTHED_NAVIGATION:
      return Object.assign({}, state, {
        items: action.authedNavigation,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function contactForms(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_CONTACT_FORMS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
      case sync.RECEIVE_CONTACT_FORMS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.contactForms,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function currentPage(state = {
  graphics: 1,
  notifications: 1,
  posts: 1,
  projects: 1,
  resumes: 1,
  roles: 1,
  users: 1,
  comments: 1,
  mangas: 1,
  media: 1,
  search_results: 1
}, action) {
  switch (action.type) {
    case sync.UPDATE_CURRENT_PAGE:
      let obj = {}
      obj[action.resourceType] = action.currentPage
      return Object.assign({}, state, obj)
    default: return state
  }
}

export function lightbox(
  state = {
    showAsFullscreen: false
  },
  action
) {
  switch(action.type) {
    case sync.TOGGLE_FULLSCREEN_LIGHTBOX:
      return Object.assign({}, state, {
        showAsFullscreen: !state.showAsFullscreen
      })
    default:
      return state
  }
}

export function navigation(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_NAVIGATION:
      return Object.assign({}, state, {
      })
    case sync.RECEIVE_NAVIGATION:
      return Object.assign({}, state, {
        items: action.navigation,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function tableHeaders(
  state = {
    tree: {}
  },
  action
) {
  switch(action.type) {
    case sync.RECEIVE_TABLE_HEADERS:
      return Object.assign({}, state, {
        tree: action.tree
      })
    default:
      return state
  }
}

export function welcomeButtonSliders(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case sync.RECEIVE_WELCOME_BUTTON_SLIDERS: case sync.UPDATE_WELCOME_BUTTON_SLIDERS:
      return Object.assign({}, state, {
        items: action.welcomeButtonSliders,
      })
    default:
      return state
  }
}

export function welcomeShortcuts(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case sync.RECEIVE_WELCOME_SHORTCUTS:
      return Object.assign({}, state, {
        items: action.welcomeShortcuts,
      })
    default:
      return state
  }
}

export function welcomeTabs(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case sync.RECEIVE_WELCOME_TABS: case sync.UPDATE_WELCOME_TABS:
      return Object.assign({}, state, {
        items: action.welcomeTabs,
      })
    default:
      return state
  }
}

export function errorLog(
  state = {
    content: ""
  },
  action
) {
  switch (action.type) {
    case sync.GENERIC_API_FAILURE:
      return Object.assign({}, state, {
        items: action.errorLog,
      })
    default:
      return state
  }
}
