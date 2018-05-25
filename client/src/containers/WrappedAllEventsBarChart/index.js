import {connect} from 'react-redux'
import {createSelector} from 'reselect'
import _ from 'lodash'

import WrappedBarChart from '../../components/WrappedBarChart'
import {countVisitsForDay} from '../../utils/visitStats'
import {setHoverDays, incrementRenderCount} from '../../redux/actions'
import {
  getVisitEvents,
  getVisitEventDays,
  getHover
} from '../../redux/selectors'

const getData = createSelector(
  [getVisitEvents, getVisitEventDays], (events, days) => {
    return days.map(day => {
      return _.reduce(events,
        (result, visitEvents, visitType) => {
          return {
            ...result,
            [visitType]: countVisitsForDay(visitEvents, day)
          }
        },
        {x: day}
      )
    })
  }
)

const mapStateToProps = (state, ownProps) => ({
  data: getData(state),
  hover: getHover(state),
  xLabel: 'Dates',
  yLabel: 'Events'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setHover (day) {
    dispatch(setHoverDays(day))
  },
  incrementRenderCount (mode) {
    dispatch(incrementRenderCount('All Events Bar Chart', mode))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(WrappedBarChart)
