import React from "react"
import "./style.css"

export const SuccessItem = props => {
  return (
    <div className="alert success" onClick={props.onClick}>
      {props.messageWithKey}
    </div>
  )
}

export default SuccessItem
