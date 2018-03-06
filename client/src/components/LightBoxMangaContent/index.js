import React from 'react'
import './style.css'
import { Route } from 'react-router-dom'
import AuthedContentFooter from '../../containers/AuthedContentFooter'

export const LightBoxMangaContent = props => {
  const mangaImage = require(`../../images/manga_covers${props.image_location}`)
  return (
    <Route render={({location}) => (
      <article className="portfolio-item">
        <figure style={{width: "400px", marginBottom: "100px"}}>
          <img style={{width: "400px", height: "500px"}} src={mangaImage} alt={props.image_location}/>
        </figure>
        <div style={{marginLeft: "20px"}}>
          <h1>{props.name}</h1>
          {"authors" in props &&
            <h3> Author(s) {props.authors}</h3>
          }
          {"artists" in props &&
            <h3> Author(s) {props.artists}</h3>
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