import {createSelector} from 'reselect'
import _ from 'lodash'

import * as fromColors from './colors'
import * as fromText from './text'
import * as fromTheme from './theme'

/** delegated to slice selectors **/
// colors
export const getSaturatedColors = state =>
  fromColors.getSaturatedColors(state.colors)
export const getSaturatedColorsArray = state =>
  fromColors.getSaturatedColorsArray(state.colors)
// text
export const getText = state => state.text
export const getUsers = state => _(getText(state)).toPairs().sortBy(0).fromPairs().keys().value()
export const getTexts = state => _(getText(state)).toPairs().sortBy(0).fromPairs().values().value()

// theme
export const getTheme = state => fromTheme.getTheme(state.theme)

/** top level selectors (simple cases) **/
export const getHover = state => state.hover
export const getRenderCount = state => state.renderCount
export const getTick = state => state.tick
