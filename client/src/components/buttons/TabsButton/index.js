import React from 'react'

import './style.css'

export const TabsButton = props => {
  const isActive = (props) => {
    return ( props.active ? "active" : "" )
  }

  const iconClass = (props) => {
    return ("icon-" + props.icon)
  }

  return (
    <li className={isActive(props)} onClick={props.onClick}>
      <div>
        <i className={iconClass(props)} />
        {props.buttonContent}
      </div>
    </li>
  )
}

export default TabsButton

//Button.propTypes = {
//  style: React.PropTypes.object,
//  onClick: React.PropTypes.func,
//  type: React.PropTypes.string.isRequired,
//  children: React.PropTypes.node.isRequired
//}
