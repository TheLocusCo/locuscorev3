import React from "react"
import CircularProgress from 'material-ui/CircularProgress'

// Replace h1 with loading gif
export const EmptyPage = props => {
  return (
    <div className="main-content">
      <div className="page-content">
        <div style={{paddingTop: "15%"}} className="welcome-block centered">
          <CircularProgress size={150} thickness={10} />
        </div>
      </div>
    </div>
  )
}

export default EmptyPage
