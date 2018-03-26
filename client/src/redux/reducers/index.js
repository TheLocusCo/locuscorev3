//import merge from 'lodash/merge'
//import paginate from './paginate'
import { combineReducers } from 'redux'
import { reduxTokenAuthReducer } from 'redux-token-auth'
import { reducer as formReducer } from 'redux-form'

import {
  CREATE_RESOURCE_FAILURE,
  GENERIC_API_FAILURE,
  DESTROY_RESOURCE_FAILURE,
  DELETE_EDIT_ITEM,
  DELETE_NEW_ITEM,
  DELETE_PREVIEW_COMMENT,
  DELETE_UPLOAD_ITEM,
  DELETE_CURRENT_SEARCH,
  DELETE_FIELD_FROM_CURRENT_SEARCH,
  DELETE_SEARCH_RESULTS,
  EDIT_RESOURCE_FAILURE,
  EMPTY_CATEGORIES,
  FETCH_RESOURCE_FAILURE,
  UPDATE_ACTIVE_CATEGORY,
  UPDATE_ACTIVE_CONTACT_FORM,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  REQUEST_COMMENT,
  RECEIVE_COMMENT,
  REQUEST_CONTACT_FORMS,
  RECEIVE_CONTACT_FORMS,
  REQUEST_EDIT_ITEM,
  RECEIVE_EDIT_ITEM,
  REQUEST_GRAPHICS,
  RECEIVE_GRAPHICS,
  REQUEST_GRAPHIC,
  RECEIVE_GRAPHIC,
  REQUEST_MANGA,
  RECEIVE_MANGA,
  REQUEST_MANGAS,
  RECEIVE_MANGAS,
  REQUEST_MEDIA,
  RECEIVE_MEDIA,
  REQUEST_MEDIUM,
  RECEIVE_MEDIUM,
  REQUEST_AUTHED_NAVIGATION,
  RECEIVE_AUTHED_NAVIGATION,
  REQUEST_NAVIGATION,
  RECEIVE_NAVIGATION,
  REQUEST_NEW_ITEM,
  RECEIVE_NEW_ITEM,
  REQUEST_NOTIFICATION,
  RECEIVE_NOTIFICATION,
  REQUEST_NOTIFICATIONS,
  RECEIVE_NOTIFICATIONS,
  REQUEST_PROJECTS,
  RECEIVE_PROJECTS,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_PROJECT,
  RECEIVE_PROJECT,
  REQUEST_POST,
  RECEIVE_POST,
  RECEIVE_RESUME_HOST,
  REQUEST_RESUME,
  RECEIVE_RESUME,
  REQUEST_RESUMES,
  RECEIVE_RESUMES,
  REQUEST_ROLE,
  RECEIVE_ROLE,
  REQUEST_ROLES,
  RECEIVE_UPLOAD_ITEM,
  RECEIVE_ROLES,
  REQUEST_SEARCH_ABILITY,
  RECEIVE_SEARCH_ABILITY,
  REQUEST_SEARCH_RESULTS,
  RECEIVE_SEARCH_RESULTS,
  REQUEST_SELECTS_FOR_SEARCH,
  RECEIVE_SELECTS_FOR_SEARCH,
  RECEIVE_TABLE_HEADERS,
  REQUEST_USER,
  RECEIVE_USER,
  REQUEST_USERS,
  RECEIVE_USERS,
  REQUEST_USER_NOTIFICATIONS,
  RECEIVE_USER_NOTIFICATIONS,
  REMOVE_USER_NOTIFICATION,
  REMOVE_ERROR_MESSAGE,
  UPDATE_ERROR_MESSAGES,
  REMOVE_SUCCESS_MESSAGE,
  UPDATE_SUCCESS_MESSAGES,
  RECEIVE_ADMIN_SHORTCUTS,
  RECEIVE_WELCOME_SHORTCUTS,
  RECEIVE_WELCOME_BUTTON_SLIDERS,
  TOGGLE_FULLSCREEN_LIGHTBOX,
  UPDATE_COMMENT_FORM_VISIBILITY,
  UPDATE_WELCOME_BUTTON_SLIDERS,
  UPDATE_PREVIEW_COMMENT,
  RECEIVE_WELCOME_TABS,
  UPDATE_WELCOME_TABS,
  UPDATE_CURRENT_PAGE,
  UPDATE_CURRENT_SEARCH,
  UPDATE_CURRENT_SEARCH_FIELDS,
  UPDATE_CURRENT_SEARCH_MODEL,
  USER_AUTH_FAILURE,
  USER_AUTH_DESTROY,
  USER_AUTH,
  USER_LOGIN,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_FAILURE,
} from '../actions'

function activeCategory(
  state = {
    name: "All Categories",
    id: 0
  },
  action
) {
  switch (action.type) {
    case UPDATE_ACTIVE_CATEGORY:
      return Object.assign({}, state, {
        name: action.activeCategory,
        id: action.activeCategoryId
      })
    default:
      return state
  }
}

function activeContactForm(
  state = {
    name: "Classy"
  },
  action
) {
  switch (action.type) {
    case UPDATE_ACTIVE_CONTACT_FORM:
      return Object.assign({}, state, {
        name: action.activeContactForm,
      })
    default:
      return state
  }
}

function adminShortcuts(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case RECEIVE_ADMIN_SHORTCUTS:
      return Object.assign({}, state, {
        items: action.adminShortcuts,
      })
    default:
      return state
  }
}

function authedNavigation(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_AUTHED_NAVIGATION:
      return Object.assign({}, state, {
      })
      case RECEIVE_AUTHED_NAVIGATION:
      return Object.assign({}, state, {
        items: action.authedNavigation,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function categories(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.categories,
        lastUpdated: action.receivedAt
      })
    case EMPTY_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: [],
        lastUpdated: action.receivedAt
      })
    case "CLEANUP_AFTER_DESTROY_CATEGORY":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}

function comment(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_COMMENT:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_COMMENT:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.comment,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}


function commentFormVisibility(
  state = {
    status: false
  },
  action
) {
  switch (action.type) {
    case UPDATE_COMMENT_FORM_VISIBILITY:
      return Object.assign({}, state, {
        status: action.status
      })
    default:
      return state
  }
}

function comments(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    totalPages: 1,
    paginationMeta: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.comments,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_COMMENT":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}

function contactForms(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_CONTACT_FORMS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
      case RECEIVE_CONTACT_FORMS:
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

function currentPage(state = {
  graphics: 1,
  notifications: 1,
  posts: 1,
  projects: 1,
  resumes: 1,
  roles: 1,
  users: 1,
  comments: 1,
  mangas: 1,
  media: 1
}, action) {
  switch (action.type) {
    case UPDATE_CURRENT_PAGE:
      let obj = {}
      obj[action.resourceType] = action.currentPage
      return Object.assign({}, state, obj)
    default: return state
  }
}

function currentUser(state = {
  email: "",
  name: "",
  username: "",
  id: "",
  role: {}
}, action) {
  switch (action.type) {
    case USER_LOGIN: case USER_AUTH:
      return Object.assign({}, state, {
        email: action.payload.user.email,
        username: action.payload.user.username,
        name: action.payload.user.name,
        role: action.payload.user.role,
        id: action.payload.user.id
      })
    case USER_AUTH_DESTROY:
      return Object.assign({}, state, {
        email: "",
        username: "",
        name: "",
        id: "",
        role: {}
      })
    default: return state
  }
}

function editItem(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_EDIT_ITEM:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
      case RECEIVE_EDIT_ITEM:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.resource,
        lastUpdated: action.receivedAt
      })
    case DELETE_EDIT_ITEM:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: {}
      })
    default:
      return state
  }
}

function lightbox(
  state = {
    showAsFullscreen: false
  },
  action
) {
  switch(action.type) {
    case TOGGLE_FULLSCREEN_LIGHTBOX:
      return Object.assign({}, state, {
        showAsFullscreen: !state.showAsFullscreen
      })
    default:
      return state
  }
}

function graphic(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_GRAPHIC:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_GRAPHIC:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.graphic,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function graphics(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    totalPages: 1,
    paginationMeta: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_GRAPHICS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_GRAPHICS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.graphics,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_GRAPHIC":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}

function manga(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_MANGA:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_MANGA:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.manga,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function mangas(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    totalPages: 1,
    paginationMeta: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_MANGAS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_MANGAS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.mangas,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_MANGAS_GALLERY":
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: [],
        totalPages: 1,
        paginationMeta: {}
      })
    case "CLEANUP_AFTER_DESTROY_MEDIUM":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}

function medium(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_MEDIUM:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_MEDIUM:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.medium,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function media(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    totalPages: 1,
    paginationMeta: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_MEDIA:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_MEDIA:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.media,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_MEDIUM":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}

function navigation(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_NAVIGATION:
      return Object.assign({}, state, {
      })
    case RECEIVE_NAVIGATION:
      return Object.assign({}, state, {
        items: action.navigation,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function newItem(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_NEW_ITEM:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_NEW_ITEM:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.resource,
        lastUpdated: action.receivedAt
      })
    case DELETE_NEW_ITEM:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: {}
      })
    default:
      return state
  }
}

function notification(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_NOTIFICATION:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_NOTIFICATION:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.notification,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function notifications(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    totalPages: 1,
    paginationMeta: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_NOTIFICATIONS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_NOTIFICATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.notifications,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_NOTIFICATION":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}

function previewComment(
  state = {
    content: {}
  },
  action
) {
  switch (action.type) {
    case UPDATE_PREVIEW_COMMENT:
      return Object.assign({}, state, {
        content: action.previewComment,
        lastUpdated: action.receivedAt
      })
    case DELETE_PREVIEW_COMMENT:
      return Object.assign({}, state, {
        content: {}
      })
    default:
      return state
  }
}

function post(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.post,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    totalPages: 1,
    paginationMeta: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_POST":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}

function project(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_PROJECT:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_PROJECT:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.project,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function projects(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    totalPages: 1,
    paginationMeta: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_PROJECTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_PROJECTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.projects,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_PROJECT":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}

function resume(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_RESUME:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_RESUME:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.resume,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function resumeHost(
  state = {
    host: ""
  },
  action
) {
  switch(action.type) {
    case RECEIVE_RESUME_HOST:
      return Object.assign({}, state, {
        host: action.resumeHost
      })
    default:
      return state
  }
}

function resumes(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    totalPages: 1,
    paginationMeta: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_RESUMES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_RESUMES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.resumes,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_RESUME":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}

function role(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_ROLE:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_ROLE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.role,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function roles(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    totalPages: 1,
    paginationMeta: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_ROLES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_ROLES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.roles,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_ROLE":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}

function searchAbility(
  state = {
    tree: {},
    isFetching: false,
  },
  action
) {
  switch(action.type) {
    case REQUEST_SEARCH_ABILITY:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_SEARCH_ABILITY:
      return Object.assign({}, state, {
        isFetching: false,
        tree: action.searchAbility,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function currentSearch(
  state = {
    fields: [],
    model: "",
    forSelects: {},
    isFetching: false,
  },
  action
) {
  switch(action.type) {
    case UPDATE_CURRENT_SEARCH_FIELDS:
      return Object.assign({}, state, {
        fields: state.fields.concat(action.field)
      })
    case UPDATE_CURRENT_SEARCH_MODEL:
      return Object.assign({}, state, {
        model: action.model
      })
    case REQUEST_SELECTS_FOR_SEARCH:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_SELECTS_FOR_SEARCH:
      let newForSelect = state.forSelects
      newForSelect[action.field] = action.results
      return Object.assign({}, state, {
        forSelects: newForSelect,
        fields:  state.fields.concat(action.field),
        isFetching: false
      })
    case DELETE_CURRENT_SEARCH:
      return Object.assign({}, state, {
        fields: [],
        model: "",
        forSelects: {}
      })
    case DELETE_FIELD_FROM_CURRENT_SEARCH:
      return Object.assign({}, state, {
        fields: state.fields.filter(fieldName => fieldName !== action.fieldToRemove)
      })
    default:
      return state
  }
}

function currentSearchResults(
  state = {
    model: "",
    params: {},
    items: [],
    isFetching: false,
    totalPages: 1,
    paginationMeta: {}
  },
  action
) {
  switch(action.type) {
    case REQUEST_SEARCH_RESULTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_SEARCH_RESULTS:
      return Object.assign({}, state, {
        model: action.model,
        items: action.results,
        params: action.params,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta,
        isFetching: false
      })
    case DELETE_SEARCH_RESULTS:
      return Object.assign({}, state, {
        model: "",
        items: [],
        params: {},
        totalPages: 1,
        paginationMeta: {},
        isFetching: false
      })
    default:
      return state
  }
}

function tableHeaders(
  state = {
    tree: {}
  },
  action
) {
  switch(action.type) {
    case RECEIVE_TABLE_HEADERS:
      return Object.assign({}, state, {
        tree: action.tree
      })
    default:
      return state
  }
}

function uploadItem(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case RECEIVE_UPLOAD_ITEM:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.resource,
        lastUpdated: action.receivedAt
      })
    case DELETE_UPLOAD_ITEM:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: {}
      })
    default:
      return state
  }
}

function user(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.user,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function users(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    totalPages: 1,
    paginationMeta: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.users,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_USER":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}

function userNotifications(state = {
  items: [],
  isFetching: false,
  didInvalidate: false
}, action) {
  switch (action.type) {
    case REQUEST_USER_NOTIFICATIONS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_USER_NOTIFICATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.userNotifications,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case REMOVE_USER_NOTIFICATION:
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default: return state
  }
}

function welcomeButtonSliders(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case RECEIVE_WELCOME_BUTTON_SLIDERS: case UPDATE_WELCOME_BUTTON_SLIDERS:
      return Object.assign({}, state, {
        items: action.welcomeButtonSliders,
      })
    default:
      return state
  }
}

function welcomeShortcuts(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case RECEIVE_WELCOME_SHORTCUTS:
      return Object.assign({}, state, {
        items: action.welcomeShortcuts,
      })
    default:
      return state
  }
}

function welcomeTabs(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case RECEIVE_WELCOME_TABS: case UPDATE_WELCOME_TABS:
      return Object.assign({}, state, {
        items: action.welcomeTabs,
      })
    default:
      return state
  }
}

function successMessages(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case UPDATE_SUCCESS_MESSAGES:
      return Object.assign({}, state, {
        items: action.successMessages,
      })
    case REMOVE_SUCCESS_MESSAGE:
      const successObject = action.successMessage
      return { items: state.items.filter(successObjectInState => successObjectInState !== successObject) }
    default:
      return state
  }
}

function errorMessages(
  state = {
    items: []
  },
  action
) {
  switch (action.type) {
    case USER_AUTH_FAILURE:
      return state
    case USER_LOGIN_FAILURE: case USER_LOGOUT_FAILURE: case FETCH_RESOURCE_FAILURE: case CREATE_RESOURCE_FAILURE: case EDIT_RESOURCE_FAILURE: case DESTROY_RESOURCE_FAILURE: case UPDATE_ERROR_MESSAGES:
      return Object.assign({}, state, {
        items: action.errorMessages,
      })
    case REMOVE_ERROR_MESSAGE:
      const errorObject = action.errorMessage
      return { items: state.items.filter(errorObjectInState => errorObjectInState !== errorObject) }
    default:
      return state
  }
}

function errorLog(
  state = {
    content: ""
  },
  action
) {
  switch (action.type) {
    case GENERIC_API_FAILURE:
      return Object.assign({}, state, {
        items: action.errorLog,
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  activeCategory,
  activeContactForm,
  adminShortcuts,
  authedNavigation,
  currentUser,
  currentPage,
  currentSearch,
  currentSearchResults,
  categories,
  comment,
  commentFormVisibility,
  comments,
  contactForms,
  editItem,
  form: formReducer,
  graphic,
  graphics,
  lightbox,
  manga,
  mangas,
  media,
  medium,
  navigation,
  notification,
  notifications,
  newItem,
  project,
  projects,
  post,
  posts,
  previewComment,
  resume,
  resumeHost,
  resumes,
  searchAbility,
  role,
  roles,
  tableHeaders,
  uploadItem,
  user,
  users,
  userNotifications,
  welcomeButtonSliders,
  welcomeShortcuts,
  welcomeTabs,
  errorMessages,
  successMessages,
  errorLog,
  reduxTokenAuth: reduxTokenAuthReducer
})

export default rootReducer
