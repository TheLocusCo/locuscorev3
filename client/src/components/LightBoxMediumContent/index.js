import React from 'react'
import './style.css'
import AuthedContentFooter from '../../containers/AuthedContentFooter'
import LightBoxUploadForm from '../LightBoxUploadForm'

export const LightBoxMediumContent = props => {
  const downloadMedia = (url) => {
    setTimeout(() => {
      const response = {
        file: url.original
      }
      window.open(response.file)
    }, 100)
    return
  }

  const renderMedia = (url, mode, name) => {
    switch (mode) {
      case "image":
        if (url !== null) {
          return (
            <div className="box-dark">
              <div className="centered">
                <img src={url} alt={mode}/>
                <div>
                  <a className="button" onClick={() => {downloadMedia(url)}}>
                    <i className="icon-download"/>
                    Download This Image
                  </a>
                </div>
              </div>
            </div>
          )
        } else {
          return null
        }
      case "generic":
        if (url !== null) {
          return (
            <div className="box-dark">
              <div className="centered">
                <a className="button" onClick={() => {downloadMedia(url)}}>
                  <i className="icon-download"/>
                  Download {name}
                </a>
              </div>
            </div>
          )
        } else {
          return null
        }
      default:
        return null
    }
  }

  const renderBoolean = (bool) => {
    if (bool) {
      return (<i className="icon-check"/>)
    } else {
      return (<i className="icon-cancel"/>)
    }
  }

  return (
    <article className="portfolio-item">
      <h1 className="section-heading larger">{props.name}</h1>
      <div className="box-dark">
        <table className="show-table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{props.name}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{props.description}</td>
            </tr>
            <tr>
              <td>Categories</td>
              <td>{props.categories.filter(object => object.name !== "All Categories").map(function(elem) { return elem.name }).join(", ")}</td>
            </tr>
            <tr>
              <td>Globally Visible?</td>
              <td>{renderBoolean(props.globally_visible)}</td>
            </tr>
            <tr>
              <td>Creator</td>
              <td>{props.creator}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {props.image && renderMedia(props.image.original, "image", "")}
      {props.generic_name && renderMedia(props.generic, "generic", props.generic_name)}
      <LightBoxUploadForm {...props}/>
      <AuthedContentFooter location={props.location} />
    </article>
  )
}

export default LightBoxMediumContent
