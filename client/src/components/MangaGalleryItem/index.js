import React from 'react'
import placeholder from 'components/MangaGalleryItem/manga_placeholder.png'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router-dom'

export const MangaGalleryItem = props => {
  const renderMedia = (props) => {
    if (props.image_location) {
      return <img style={{width: "285px"}} src={props.image_location} alt={props.image_location} />
    } else {
      return <img style={{width: "285px"}} src={placeholder} alt="placeholder" />
    }
  }

  return (
    <li className="gallery-item" key={props.id}>
      <Link to={props.href.replace("/mangas", "/manga_gallery")}>
        {renderMedia(props)}
        <div className="overlay" />
        <div className="ind-open"/>
        <span>{props.name}</span>
      </Link>
    </li>
  )
}

export default MangaGalleryItem
