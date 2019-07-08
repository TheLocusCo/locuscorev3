import React from 'react'
import { Route } from 'react-router-dom'

import './style.css'
import AuthedContentFooter from 'containers/AuthedContentFooter'

export const LightBoxMangaContent = props => {
  return (
    <Route render={({location}) => (
      <article className="portfolio-item">
        <figure style={{width: "400px", marginBottom: "100px"}}>
          <img style={{width: "400px", height: "500px"}} src={props.image_location} alt={props.image_location}/>
        </figure>
        <div style={{marginLeft: "20px"}}>
          <h1>{props.name}</h1>
          {"authors" in props &&
            <h3> Author(s): {props.authors}</h3>
          }
          {"artists" in props &&
            <h3> Artist(s): {props.artists}</h3>
          }
          <p className="manga-description">{props.description}</p>
          <dl style={{marginTop: "20px"}}>
            <dt>
              Chapters:
            </dt>
            <dd>{props.total_chapters}</dd>
            <dt>
              <span className="helper"/>
              Genres:
            </dt>
            <dd>{props.category_genres}</dd>
          </dl>
        </div>
        <AuthedContentFooter location={props.location} displayWebkitBox={true} />
      </article>
    )}/>
  )
}

export default LightBoxMangaContent
