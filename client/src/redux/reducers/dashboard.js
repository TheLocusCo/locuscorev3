import {fromJS} from 'immutable'
import * as sync from '../actions/sync'

const setColor = (state, action) => {
  return state.set(action.user, action.color)
}

const setHover = (state, action) => {
  return fromJS(action.letters)
}

const incrementRenderCount = (state, action) => {
  return state.updateIn(
    [action.component, action.mode],
    (value = 0) => value + 1
  )
}

const newText = (state, action) => {
  return state.mergeDeep(fromJS(action.text))
}

const incrementTick = (state, action) => {
  return state + 1
}

export const colorReducer = (state, action) => {
  switch (action.type) {
    case sync.SET_COLOR:
      return setColor(state, action)
    default:
      return state
  }
}

export const hoverReducer = (state, action) => {
  switch (action.type) {
    case sync.SET_HOVER:
      return setHover(state, action)
    default:
      return state
  }
}

export const renderCountReducer = (state, action) => {
  switch (action.type) {
    case sync.INCREMENT_RENDER_COUNT:
      return incrementRenderCount(state, action)
    default:
      return state
  }
}

export const textReducer = (state, action) => {
  switch (action.type) {
    case sync.NEW_TEXT:
      return newText(state, action)
    default:
      return state
  }
}

const tickReducer = (state, action) => {
  switch (action.type) {
    case sync.TICK:
      return incrementTick(state, action)
    default:
      return state
  }
}
