import React from 'react'
import { Link } from 'react-router-dom'
import { Markdown } from 'react-showdown'

import './style.css'
import AuthedContentFooter from 'containers/AuthedContentFooter'
import SliderMediaContainer from 'containers/SliderMediaContainer'

export const LightBoxPostContent = props => {
  const renderCategoriesAsURLTags = (categories) => {
    var count=0
    return categories.map(category => {
      if (category.name !== "All Categories") {
        count++
        return (
          <Link style={{marginLeft: "5px"}} key={count} to={`/search_results?model=posts&category=${category.name}&page=1`}>
            #{category.name}
          </Link>
        )
      }

      return null
    })
  }

  return (
    <article className="portfolio-item">
      <h1 className="section-heading larger">{props.title}</h1>
      <h3 className="centered">
        On {props.date} by {props.author}
        <br></br>
        Categorized Under: {renderCategoriesAsURLTags(props.categories)}
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
