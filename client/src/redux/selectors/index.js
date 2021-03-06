import * as fromColors from 'redux/selectors/colors'
import * as fromText from 'redux/selectors/text'
import * as fromTheme from 'redux/selectors/theme'
import * as fromVisit from 'redux/selectors/visit'

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
export const getVisitEventLinks = state => fromVisit.getVisitEventLinks(state)
export const getVisitNameMappings = state => fromVisit.getVisitNameMappings(state)

/** top level selectors (simple cases) **/
export const getHover = state => state.hover
export const getRenderCount = state => state.renderCount
export const getTick = state => state.tick
export const getNavigation = state => state.navigation.items
