import {createSelector} from 'reselect'
import _ from 'lodash'

export const getText = state => state

export const getUsers = createSelector(getText, text => {
  return Object.keys(_.sortBy(text, (v, k) => k))
})

export const getTexts = createSelector(getText, text => {
  return Object.values(_.sortBy(text, (v, k) => k))
})
