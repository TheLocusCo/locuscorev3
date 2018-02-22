import React from 'react'
import './style.css'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Moment from 'react-moment'
import { Markdown } from 'react-showdown'

export const LightBoxCommentContent = props => {
  const userComment = (props) => {
    if(props.user_id) {
      return ("user-comment")
    } else {
      return ("comment")
    }
  }

  const renderNameWithWebsite = (props) => {
    if (props.user_id) {
      return (
        <a href={props.poster_website}>
          <i className="icon-user" />
          {props.poster_name}
        </a>
      )
    } else if (props.poster_website !== "") {
      return (
        <a href={props.poster_website}>
          <i className="icon-network" />
          {props.poster_name}
        </a>
      )
    } else {
      return (
        <a href={"mail-to:" + props.poster_email}>
          {props.poster_name}
        </a>
      )
    }
  }

  const renderDates = (props) => {
    if (props.isPreview) {
      return (
        <div style={{display: "inline-block"}}>
          <Moment format="MMMM D, YYYY | H:mm:ss a">
            {props.inserted_at}
          </Moment>
        </div>
      )
    } else {
      return(props.inserted_at_date + " | " + props.inserted_at_time)
    }
  }

  const renderContent = (props) => {
    if (props.isPreview) {
      return <Markdown markup={ props.content } />
    } else {
      return <div dangerouslySetInnerHTML={{ __html: props.content }} />
    }
  }

  return (
    <div key={props.key} className={userComment(props)}>
      <h3>
        {renderNameWithWebsite(props)} | {renderDates(props)}
      </h3>
      {renderContent(props)}

    </div>
  )
}

export default LightBoxCommentContent
