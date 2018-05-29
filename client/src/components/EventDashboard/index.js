import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {transparentize} from 'polished'
import _ from 'lodash'
import ReactGridLayout, {WidthProvider} from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import WrappedDaytoEventsCountBarChart from '../../containers/WrappedDayToEventsCountBarChart'
import WrappedEventLinksToEventsCountBarChart from '../../containers/WrappedEventLinksToEventsCountBarChart'
import AutoFilterPieChart from '../../containers/WrappedAllEventsPieChart'
//import WrappedScatterPlot from '../../containers/WrappedScatterPlot'
//import DemoChat from '../../containers/DemoChat'
import withMeasure from '../../hocs/withMeasure'

const {object, func} = PropTypes
const GridLayout = WidthProvider(ReactGridLayout)
const dimensions = ['width', 'height']
const MeasuredD2ECEventsBarChart = withMeasure(dimensions)(WrappedDaytoEventsCountBarChart)
const MeasuredAllEventsPieChart = withMeasure(dimensions)(AutoFilterPieChart)
const MeasuredEL2ECBarChart = withMeasure(dimensions)(WrappedEventLinksToEventsCountBarChart)

const generateDataGroupCSS = colors => {
  return _.reduce(
    colors,
    (result, color, visit) => {
      result += `.data-group-${visit} { fill: ${color}; }`
      return result
    },
    ''
  )
}

const Grid = styled(GridLayout)`
  .axis text {
    fill: ${({theme}) => theme.color};
  }
  .axis path,
  .axis line {
    fill: none;
    stroke: ${({theme}) => theme.color};
    shape-rendering: crispEdges;
  }
  .stroked {
    stroke: ${({theme}) => theme.color};
  }
  .stroked-negative {
    stroke: ${({theme}) => theme.background};
  }
  ${({colors}) => generateDataGroupCSS(colors)}
  .data {
    opacity: ${({hover}) => (hover ? 0.25 : 1)};
    -webkit-transition: opacity .2s ease-in;
  }
  .tooltip {
    position: absolute;
    z-index: 100000;
    display: inline-block;
    border: solid 1px ${({theme}) => theme.secondaryColor};
    border-radius: 2px;
    padding: 5px;
    background-color: ${({theme}) => transparentize(0.2, theme.secondaryBackground)};
    text-align: center;
    color: ${({theme}) => theme.secondaryColor};
  }
`

class EventDashboard extends React.Component {
  static propTypes = {
    colors: object,
    hover: object,
    incrementRenderCount: func
  }

  componentDidMount() {
    this.props.incrementRenderCount('component')
    window.addEventListener('resize', this.onWindowResize)
  }

  componentDidUpdate(prevProps, prevState) {
    this.props.incrementRenderCount('component')
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
  }

  onWindowResize = e => {
    this.forceUpdate()
  }

  render() {
    const {hover, colors} = this.props
    const layout = [
      {i: 'T', x: 0, y: 0, w: 12, h: 7},
      {i: 'BL', x: 0, y: 7, w: 4, h: 5},
      {i: 'BR', x: 4, y: 7, w: 8, h: 5}
    ]
    return (
      <Grid
        className="dashboard"
        hover={hover}
        colors={colors}
        layout={layout}
        cols={12}
        rowHeight={(window.innerHeight - 29) / 12}
        margin={[0, 0]}
      >
        <div key="T">
          <MeasuredD2ECEventsBarChart />
        </div>
        <div key="BL">
          <MeasuredAllEventsPieChart />
        </div>
        <div key="BR">
          <MeasuredEL2ECBarChart />
        </div>
      </Grid>
    )
  }
}

export default EventDashboard
