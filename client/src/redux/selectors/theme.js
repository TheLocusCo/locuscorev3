import {createSelector} from 'reselect'
import themes from 'utils/themes'

const getThemeName = state => state.theme

export const getTheme = createSelector(getThemeName, theme => themes[theme])
