import _ from 'lodash'

export const INCREMENT_RENDER_COUNT = 'INCREMENT_RENDER_COUNT'
export const NEW_TEXT = 'NEW_TEXT'
export const SELECT_THEME = 'SELECT_THEME'
export const SET_COLOR = 'SET_COLOR'
export const SET_VISIT_COLOR = 'SET_VISIT_COLOR'
export const SET_HOVER = 'SET_HOVER'
export const SET_HOVER_DAYS = 'SET_HOVER_DAYS'
export const SET_HOVER_LINKS = 'SET_HOVER_LINKS'
export const TICK = 'TICK'

export const newText = text => ({
  type: NEW_TEXT,
  text
})

export const setHover = letter => ({
  type: SET_HOVER,
  letters: !letter ? null : Array.isArray(letter) ? _.uniq(letter) : [letter]
})

export const setHoverDays = day => ({
  type: SET_HOVER_DAYS,
  days: !day ? null : Array.isArray(day) ? _.uniq(day) : [day]
})

export const setHoverLinks = lnk => ({
  type: SET_HOVER_LINKS,
  links: !lnk ? null : Array.isArray(lnk) ? _.uniq(lnk) : [lnk]
})

export const tick = () => ({
  type: TICK
})

export const setColor = (user, color) => ({
  type: SET_COLOR,
  user,
  color
})

export const setVisitColor = (visit, color) => ({
  type: SET_VISIT_COLOR,
  visit,
  color
})

export const incrementRenderCount = (component, mode) => ({
  type: INCREMENT_RENDER_COUNT,
  component,
  mode
})

export const selectTheme = theme => ({
  type: SELECT_THEME,
  theme
})
