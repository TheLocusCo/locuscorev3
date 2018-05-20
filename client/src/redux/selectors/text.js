import {createSelector} from 'reselect'
import _ from 'lodash'

export const getText = state => state.text

export const getUsers = createSelector(
  getText,
  text => _(text).toPairs().sortBy(0).fromPairs().keys().value()
)

export const getTexts = createSelector(
  getText,
  text => _(text).toPairs().sortBy(0).fromPairs().values().value()
)
