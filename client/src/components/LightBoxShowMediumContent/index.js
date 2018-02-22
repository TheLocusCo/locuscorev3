import React from 'react'
import './style.css'

export const LightBoxShowMediumContent = props => {
  const downloadMedia = (url) => {
    setTimeout(() => {
      const response = {
        file: url
      }
      window.open(response.file)
    }, 100)
    return
  }

  return (
    <article className="portfolio-item">
      {props.arc_media && props.arc_media.original !== null &&
        <div className="centered">
          <img src={props.arc_media.original} alt=""/>
        </div>
      }
      {props.arc_media_generic !== null &&
        <div className="centered" style={{marginTop: "22%"}}>
          <a className="button" onClick={() => {downloadMedia(props.arc_media_generic)}}>
            <i className="icon-download"/>
            Download {props.arc_media_generic_name}
          </a>
        </div>
      }
    </article>
  )
}

export default LightBoxShowMediumContent
