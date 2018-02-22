import React from "react"
import "./style.css"

export const ButtonSliderPagerButton = props => {
  const isActive = (props) => {
    return ( props.active ? "active" : "" )
  }

  return (
    <span className={isActive(props)} onClick={props.onClick}>•</span>
  )
}

export default ButtonSliderPagerButton

//Button.propTypes = {
//  style: React.PropTypes.object,
//  onClick: React.PropTypes.func,
//  type: React.PropTypes.string.isRequired,
//  children: React.PropTypes.node.isRequired
//}
