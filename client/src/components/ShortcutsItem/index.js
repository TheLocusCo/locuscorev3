import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export const ShortcutsItem = props => {
  const iconClass = (props) => {
    return ("icon-" + props.icon)
  }

  return (
    <div className="span6" key={props.id}>
      <Link to={props.href}>
        <h2>{props.title}</h2>
        <p>{props.basic_description}</p>
        <span className="ico">
          <i className={iconClass(props)} />
        </span>
      </Link>
    </div>
  )
}

export default ShortcutsItem
