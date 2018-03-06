import React from 'react'
import './style.css'
import { Route } from 'react-router-dom'
import AuthedContentFooter from '../../containers/AuthedContentFooter'
import SliderMediaContainer from '../../containers/SliderMediaContainer'

export const LightBoxProjectContent = props => {
  return (
    <Route render={({location}) => (
      <article className="portfolio-item">
        <SliderMediaContainer media={props.media} type="slider_show"/>
        <div style={{margin: "0 0 0 20px"}}>
          <h1>{props.name}</h1>
          <dl style={{marginTop: "70px"}}>
            <dt>
              Client:
            </dt>
            <dd>{props.client}</dd>
            <dt>
              <span className="helper"/>
              Role:
            </dt>
            <dd>{props.role}</dd>
          </dl>
        </div>
        <div className="project-content">
          <div dangerouslySetInnerHTML={{ __html: props.main_description }} />
        </div>
        {"site" in props &&
          <p className="centered" style={{marginTop: "20px"}}>
            <a className="button" href={props.site}>
              <i className="icon-eye"/>
              View Site
            </a>
          </p>
        }
        <AuthedContentFooter location={props.location} />
      </article>
    )}/>
  )
}

export default LightBoxProjectContent