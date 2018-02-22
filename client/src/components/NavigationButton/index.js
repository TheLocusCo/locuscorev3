import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export const NavigationButton = props => {
  const iconClass = (props) => {
    return ("icon-" + props.icon)
  }

  const isActive = (props, location) => {
    return ( props.location.pathname === props.href ? "active" : "" )
  }

  return (
    <li style={props.style} className={isActive(props)}>
      <Link to={props.href}>
        <i className={iconClass(props)} />
        {props.title}
        <span className="helper1" />
        <span className="helper2" />
      </Link>
    </li>
  )
}

// <span class="helper1" /><span class="helper2" />

export default NavigationButton
