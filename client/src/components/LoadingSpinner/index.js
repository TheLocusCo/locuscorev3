import React from "react"
import "./style.css"
import CircularProgress from 'material-ui/CircularProgress'

// Replace h1 with loading gif
export const LoadingSpinner = props => {
  return (
    <CircularProgress size={250} thickness={10} />
  )
}

export default LoadingSpinner
