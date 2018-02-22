import React from 'react'
import './style.css'

export const NotificationsItem = props => {
  return (
    <div className="notification-indiv box-dark">
      <span className="ico" onClick={props.onClick}>
        <i className={"icon-" + props.icon}/>
      </span>
      <h2 onClick={props.onClick}>{props.from_name} ({props.from_email})</h2>
      <p onClick={props.onClick}>{props.truncated_content}</p>
      <div className="notification-indiv-link" onClick={props.onDismiss}>
        <i className="icon-cancel-squared" />
      </div>
    </div>
  )
}

export default NotificationsItem
