import React from 'react'
import './style.css'
import AuthedContentFooter from '../../containers/AuthedContentFooter'
import SliderMediaContainer from '../../containers/SliderMediaContainer'

import { Markdown } from 'react-showdown'

export const LightBoxPostContent = props => {
  return (
    <article className="portfolio-item">
      <h1 className="section-heading larger">{props.title}</h1>
      <h3 className="centered">
        On {props.date} by {props.author}
      </h3>
      <SliderMediaContainer media={props.media} type="slider_big" hideOnNoMedia={true}/>
      <div className="post-content" style={{display: "block"}}>
        <Markdown markup={ props.content } />
      </div>
      <AuthedContentFooter location={props.location} displayWebkitBox={true} />
    </article>
  )
}

export default LightBoxPostContent
