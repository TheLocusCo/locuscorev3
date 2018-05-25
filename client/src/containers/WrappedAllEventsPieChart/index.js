import React from 'react'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'
import _ from 'lodash'

import WrappedPieChart from '../../components/WrappedPieChart'
import {countVisitsForDay} from '../../utils/visitStats'
import {incrementRenderCount, setVisitColor} from '../../redux/actions'
import {getColorWithDefaultSaturation, COLOR_PALLET} from '../../utils/colors'
import {
  getVisitEvents,
  getHover,
} from '../../redux/selectors'

const getFilterEnabled = (state, ownProps) => ownProps.filter

const getAutoHover = createSelector(
  [getHover, getFilterEnabled], (hover, filter) => {
  return filter ? hover : null
})

const getData = createSelector(
  [getVisitEvents, getAutoHover], (events, hover) => {
  return _.reduce(events, (result, visitEvents, visitType) => {
    const nbOfVisits = countVisitsForDay(visitEvents, hover ? hover : null)
    result.push({
      name: visitType,
      value: nbOfVisits
    })
    return result
  }, [])
})

const getTitleFromHover = createSelector(getHover, hover => {
  return (
    Array.isArray(hover) ?
      `Events For Day: ${hover.join(', ')}` : 'Event Volume By Visit Type'
  )
})

const getPallet = createSelector(
  () => COLOR_PALLET,
  pallet => {
    return pallet.map(color => {
      return {
        name: color,
        value: getColorWithDefaultSaturation(color)
      }
    })
  }
)

const mapStateToProps = (state, ownProps) => ({
  data: getData(state, ownProps),
  hover: getAutoHover(state, ownProps),
  title: getTitleFromHover(state),
  pallet: getPallet(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  incrementRenderCount(mode) {
    dispatch(incrementRenderCount('All Events Pie Chart', mode))
  },
  setObjColor (visit, color) {
    dispatch(setVisitColor(visit, color))
  },
})

const ConnectedPie = connect(mapStateToProps, mapDispatchToProps)(
  WrappedPieChart
)

class AutoFilterPieChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterEnabled: true
    }
  }

  toggleFilter = () => {
    this.setState(state => ({
      filterEnabled: !state.filterEnabled
    }))
  }

  render() {
    return (
      <ConnectedPie
        filter={this.state.filterEnabled}
        toggleFilter={this.toggleFilter}
        {...this.props}
      />
    )
  }
}

export default AutoFilterPieChart
