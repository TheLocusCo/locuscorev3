import React from "react"

export const SuccessItem = props => {
  return (
    <div className="alert success" onClick={props.onClick}>
      {props.messageWithKey}
    </div>
  )
}

export default SuccessItem
