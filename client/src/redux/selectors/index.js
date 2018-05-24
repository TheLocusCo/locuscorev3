import * as fromColors from './colors'
import * as fromText from './text'
import * as fromTheme from './theme'
import * as fromVisit from './visit'

/** delegated to slice selectors **/
// colors
export const getSaturatedColors = state =>
  fromColors.getSaturatedColors(state)
export const getSaturatedColorsArray = state =>
  fromColors.getSaturatedColorsArray(state)

// text
export const getText = state => fromText.getText(state)
export const getUsers = state => fromText.getUsers(state)
export const getTexts = state => fromText.getTexts(state)

// theme
export const getTheme = state => fromTheme.getTheme(state)

// visit
export const getVisit = state => fromVisit.getVisit(state)
export const getVisitEvents = state => fromVisit.getVisitEvents(state)
export const getVisitEventDays = state => fromVisit.getVisitEventDays(state)

/** top level selectors (simple cases) **/
export const getHover = state => state.hover
export const getRenderCount = state => state.renderCount
export const getTick = state => state.tick
