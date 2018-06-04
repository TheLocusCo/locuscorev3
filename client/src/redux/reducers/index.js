import { combineReducers } from 'redux'
import { reduxTokenAuthReducer } from 'redux-token-auth'
import { reducer as formReducer } from 'redux-form'

import { categories } from 'redux/reducers/categories.js'
import { comment, commentFormVisibility, comments, previewComment } from 'redux/reducers/comments.js'
import { colors, hover, renderCount, text, theme, tick } from 'redux/reducers/dashboard.js'
import { graphic, graphics } from 'redux/reducers/graphics.js'
import { manga, mangas } from 'redux/reducers/mangas.js'
import { medium, media } from 'redux/reducers/media.js'
import { errorMessages, successMessages } from 'redux/reducers/messages.js'
import { notification, notifications } from 'redux/reducers/notifications.js'
import { post, posts } from 'redux/reducers/posts.js'
import { project, projects } from 'redux/reducers/projects.js'
import { editItem, newItem, uploadItem } from 'redux/reducers/resources.js'
import { resume, resumes } from 'redux/reducers/resumes.js'
import { role, roles } from 'redux/reducers/roles.js'
import { searchAbility, currentSearch, currentSearchResults } from 'redux/reducers/search.js'
import {
  activeCategory, activeContactForm, adminShortcuts, authedNavigation,
  contactForms, currentPage, lightbox, navigation, tableHeaders,
  welcomeButtonSliders, welcomeShortcuts, welcomeTabs, errorLog
} from 'redux/reducers/ui.js'
import { currentUser, user, users, userNotifications } from 'redux/reducers/users.js'
import { visit, visits } from 'redux/reducers/visits.js'


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
