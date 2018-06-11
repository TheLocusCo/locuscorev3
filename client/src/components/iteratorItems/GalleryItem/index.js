import React from 'react'
import { animated } from 'react-spring'

import './style.css'
import placeholder from 'components/iteratorItems/GalleryItem/portfolio_placeholder.jpg'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router-dom'

export const GalleryItem = props => {
  const renderMedia = (props) => {
    if (props.media.length > 0) {
      return <img src={props.media[0].image.thumb} alt={props.media[0].name} />
    } else {
      return <img src={placeholder} alt="placeholder" />
    }
  }

  return (
    <animated.li style={props.styles} className="gallery-item" key={props.id}>
      <Link to={props.href}>
        {renderMedia(props)}
        <div className="overlay" />
        <div className="ind-open"/>
        <span>{props.name}</span>
      </Link>
    </animated.li>
  )
}

export default GalleryItem
