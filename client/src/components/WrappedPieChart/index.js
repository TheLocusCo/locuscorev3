import React from 'react'
import PieChart from '../charts/PieChart'

const WrappedPieChart = props => {
  return (
    <div style={{width: '100%', height: '100%', display: 'inline-block'}}>
      <PieChart
        thickness={30}
        {...props}
      />
    </div>
  )
}

/*
<div>
  <input type='checkbox' checked={filter} onChange={toggleFilter} />
  Refresh with filtered data?
</div>
*/

export default WrappedPieChart
