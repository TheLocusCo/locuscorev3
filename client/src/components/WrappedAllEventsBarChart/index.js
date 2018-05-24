import React from 'react'
import AllEventsBarChart from '../charts/AllEventsBarChart'

const WrappedAllEventsBarChart = props => (
  <div style={{width: '100%', height: '100%'}}>
    <BarChart xLabel='Dates' yLabel='Events' {...props} />
  </div>
)

export default WrappedAllEventsBarChart
