import {createSelector} from 'reselect'
import _ from 'lodash'

export const getText = state => state

export const getUsers = createSelector(
  getText,
  text => Object.keys(_.sortBy(text, (v, k) => k))
)

export const getTexts = createSelector(
  getText,
  text => Object.values(_.sortBy(text, (v, k) => k))
)
