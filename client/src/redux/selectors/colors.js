import {createSelector} from 'reselect'
import _ from 'lodash'
import {getColorWithDefaultSaturation} from '../../utils/colors'

const getColors = state => state

export const getSaturatedColors = createSelector(getColors, colors => {
  return _.transform(colors, function(result, value, key) {
    result[key] = getColorWithDefaultSaturation(value)
  }, {})
})

export const getSaturatedColorsArray = createSelector(
  getSaturatedColors,
  colors => {
    return Object.values(_.sortBy(colors, (v, k) => k))
  }
)
