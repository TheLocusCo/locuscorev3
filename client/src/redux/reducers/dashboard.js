import {fromJS} from 'immutable'
import * as sync from '../actions/sync'
import _ from 'lodash'

// FIX THESE! MANY OF THESE MUTATE STATE

const setColor = (state, action) => {
  return _.update(state, `${action.user}`, function(n) { return n })
}

const setHover = (state, action) => {
  return fromJS(action.letters)
}

const incrementRenderCount = (state, action) => {
  return _.updateWith(state, `[${action.component}][${action.mode}]`, function(n) { return n >= 0 ? n + 1 : 0; })
}

const newText = (state, action) => {
  return _.merge(state, action.text)
}

const incrementTick = (state, action) => {
  return state + 1
}

const selectTheme = (state, action) => {
  return action.theme
}

export function colors(
  state = {
    user1: 'blue',
    user2: 'orange'
  },
  action
) {
  switch (action.type) {
    case sync.SET_COLOR:
      return setColor(state, action)
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
      return setHover(state, action)
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
      return Object.assign({}, state, {
        user1: action.text.user1,
        user2: action.text.user2
      })
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
      return selectTheme(state, action)
    default:
      return state
  }
}
