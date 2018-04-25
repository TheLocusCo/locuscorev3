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
export const getUsers = state => Object.keys(_.sortBy(getText(state), (v, k) => k))
export const getTexts = state => Object.values(_.sortBy(getText(state), (v, k) => k))

// theme
export const getTheme = state => fromTheme.getTheme(state.theme)

/** top level selectors (simple cases) **/
export const getHover = state => state.hover
export const getRenderCount = state => state.renderCount
export const getTick = state => state.tick
