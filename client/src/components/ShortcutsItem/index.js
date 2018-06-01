import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { Markdown } from 'react-showdown'

export const ShortcutsItem = props => {
  const iconClass = (props) => {
    return ("icon-" + props.icon)
  }

  return (
    <div className={window.innerWidth > 980 ? 'span6' : ''} key={props.id}>
      <Link to={props.href}>
        <h2>{props.title}</h2>
        <Markdown markup={ props.basic_description } />
        <span className="ico">
          <i className={iconClass(props)} />
        </span>
      </Link>
    </div>
  )
}

export default ShortcutsItem
