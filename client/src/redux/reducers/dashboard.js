import * as sync from '../actions/sync'
import _ from 'lodash'

const incrementRenderCount = (state, action) => {
  return _.updateWith(state, `[${action.component}][${action.mode}]`, function(n) { return n >= 0 ? n + 1 : 0; })
}

const incrementTick = (state, action) => {
  return state + 1
}

export function colors(
  state = {
    user1: 'blue',
    user2: 'orange',
    visitOnly: 'green',
    visitIp: 'grey',
    visitUser: 'blue'
  },
  action
) {
  let colorObj = {}
  switch (action.type) {
    case sync.SET_COLOR:
      colorObj[action.user] = action.color
      return Object.assign({}, state, colorObj)
    case sync.SET_VISIT_COLOR:
      colorObj[action.visit] = action.color
      return Object.assign({}, state, colorObj)
    default:
      return state
  }
}

export function hover(
  state = null,
  action
) {
  switch (action.type) {
    case sync.SET_HOVER:
      return action.letters
    case sync.SET_HOVER_DAYS:
      return action.days
    default:
      return state
  }
}

export function renderCount(
  state = {},
  action
) {
  switch (action.type) {
    case sync.INCREMENT_RENDER_COUNT:
      return incrementRenderCount(state, action)
    default:
      return state
  }
}

export function text(
  state = {user1: "", user2: ""},
  action
) {
  switch (action.type) {
    case sync.NEW_TEXT:
      return Object.assign({}, state, action.text)
    default:
      return state
  }
}

export function tick(
  state = 0,
  action
) {
  switch (action.type) {
    case sync.TICK:
      return incrementTick(state, action)
    default:
      return state
  }
}

export function theme(
  state = "dark",
  action
) {
  switch (action.type) {
    case sync.SELECT_THEME:
      return action.theme
    default:
      return state
  }
}
