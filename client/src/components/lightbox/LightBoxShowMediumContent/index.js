import React from 'react'
import './style.css'

export const LightBoxShowMediumContent = props => {
  const downloadMedia = (url) => {
    setTimeout(() => {
      const response = {
        file: url.original
      }
      window.open(response.file)
    }, 100)
    return
  }

  return (
    <article className="portfolio-item">
      {props.image && props.image.original != null &&
        <div className="centered">
          <img src={props.image.original} alt=""/>
        </div>
      }
      {props.generic != null &&
        <div className="centered" style={{marginTop: "22%"}}>
          <a className="button" onClick={() => {downloadMedia(props.generic)}}>
            <i className="icon-download"/>
            Download {props.generic_name}
          </a>
        </div>
      }
    </article>
  )
}

export default LightBoxShowMediumContent
