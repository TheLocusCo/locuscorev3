import React from "react"
import "./style.css"

export const ErrorItem = props => {
  const parseProps = (props) => {
    console.log("TESTING::" + JSON.stringify(props))
    if (props.bypassKeys) {
      return (Object.values(props.messageWithKey).join(", "))
    } else {
      return (Object.keys(props.messageWithKey).join("") + ": " + Object.values(props.messageWithKey).join(", "))
    }
  }

  return (
    <div className="alert error" onClick={props.onClick}>
      {parseProps(props)}
    </div>
  )
}

export default ErrorItem
