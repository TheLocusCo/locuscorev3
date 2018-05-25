import React from 'react'
import BarChart from '../charts/BarChart'

const WrappedBarChart = props => (
  <div style={{width: '100%', height: '100%'}}>
    <BarChart xLabel={props.xLabel} yLabel={props.yLabel} {...props} />
  </div>
)

export default WrappedBarChart
