import React from 'react'
import AuthedContentFooter from 'containers/AuthedContentFooter'

export const LightBoxNotificationContent = props => {
  return (
    <article className="portfolio-item">
      <h1 className="section-heading larger">From {props.from_name} ({props.from_email})</h1>
      <h3 className="centered">
        Created on {props.created_at}, running from {props.parsed_start_displaying_at} to {props.parsed_stops_displaying_at}
      </h3>
      <p className="post-content">
        {props.content}
      </p>
      <AuthedContentFooter location={props.location} />
    </article>
  )
}

export default LightBoxNotificationContent
