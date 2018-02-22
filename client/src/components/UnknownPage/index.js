import React from "react"
import "./style.css"

// Replace h1 with loading gif
export const UnknownPage = props => {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="welcome-block centered">
          <h1 className="section-heading larger">
            404 Not Found
          </h1>
          <span className="helper"/>
          <div className="welcome">
            <p>Whatever you're looking for, this is not it. Too bad, eh?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnknownPage
