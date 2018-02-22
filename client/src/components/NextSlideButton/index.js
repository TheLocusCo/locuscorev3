import React from "react"
import "./style.css"

export const NextSlideButton = props => {
  return (
    <div className="button small" onClick={props.onClick} href="#">
      { props.children }
      <i className="icon-right-open right" />
    </div>
  )
}

export default NextSlideButton

//Button.propTypes = {
//  style: React.PropTypes.object,
//  onClick: React.PropTypes.func,
//  type: React.PropTypes.string.isRequired,
//  children: React.PropTypes.node.isRequired
//}
