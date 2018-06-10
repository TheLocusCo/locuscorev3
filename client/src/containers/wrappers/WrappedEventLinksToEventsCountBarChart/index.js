import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import _ from 'lodash'

import WrappedBarChart from 'components/WrappedBarChart'
import { countVisitsForLink } from 'utils/visitStats'
import { setHoverLinks, incrementRenderCount } from 'redux/actions'
import {
  getVisitEvents,
  getVisitEventLinks,
  getHover,
  getVisitNameMappings,
} from 'redux/selectors'

const getData = createSelector(
  [getVisitEvents, getVisitEventLinks], (events, links) => {
    return links.map(lnk => {
      return _.reduce(events,
        (result, visitEvents, visitType) => {
          return {
            ...result,
            [visitType]: countVisitsForLink(visitEvents, lnk)
          }
        },
        {x: lnk}
      )
    })
  }
)

const mapStateToProps = (state, ownProps) => ({
  data: getData(state),
  hover: getHover(state),
  xLabel: 'Most Popular Urls',
  yLabel: 'Events',
  xAxisHover: 'links',
  title: 'Traffic Analysis: Events by Most Popular Urls',
  customTooltipNameObj: getVisitNameMappings(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setHover (day) {
    dispatch(setHoverLinks(day))
  },
  incrementRenderCount (mode) {
    dispatch(incrementRenderCount('Links2EventsCount Bar Chart', mode))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(WrappedBarChart)
