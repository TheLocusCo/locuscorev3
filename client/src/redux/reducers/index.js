//import merge from 'lodash/merge'
//import paginate from './paginate'
import { combineReducers } from 'redux'
import { reduxTokenAuthReducer } from 'redux-token-auth'
import { reducer as formReducer } from 'redux-form'

import { categories } from './categories.js'
import { comment, commentFormVisibility, comments, previewComment } from './comments.js'
import { colors, hover, renderCount, text, theme, tick } from './dashboard.js'
import { graphic, graphics } from './graphics.js'
import { manga, mangas } from './mangas.js'
import { medium, media } from './media.js'
import { errorMessages, successMessages } from './messages.js'
import { notification, notifications } from './notifications.js'
import { post, posts } from './posts.js'
import { project, projects } from './projects.js'
import { editItem, newItem, uploadItem } from './resources.js'
import { resume, resumeHost, resumes } from './resumes.js'
import { role, roles } from './roles.js'
import { searchAbility, currentSearch, currentSearchResults } from './search.js'
import {
  activeCategory, activeContactForm, adminShortcuts, apiUrl, authedNavigation,
  contactForms, currentPage, lightbox, navigation, tableHeaders,
  welcomeButtonSliders, welcomeShortcuts, welcomeTabs, errorLog
} from './ui.js'
import { currentUser, user, users, userNotifications } from './users.js'
import { visit, visits } from './visits.js'


const rootReducer = combineReducers({
  activeCategory,
  activeContactForm,
  adminShortcuts,
  apiUrl,
  authedNavigation,
  currentUser,
  currentPage,
  currentSearch,
  currentSearchResults,
  categories,
  colors,
  comment,
  commentFormVisibility,
  comments,
  contactForms,
  editItem,
  form: formReducer,
  graphic,
  graphics,
  hover,
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
  renderCount,
  resume,
  resumeHost,
  resumes,
  searchAbility,
  role,
  roles,
  tableHeaders,
  text,
  theme,
  tick,
  uploadItem,
  user,
  users,
  userNotifications,
  visit,
  visits,
  welcomeButtonSliders,
  welcomeShortcuts,
  welcomeTabs,
  errorMessages,
  successMessages,
  errorLog,
  reduxTokenAuth: reduxTokenAuthReducer
})

export default rootReducer
