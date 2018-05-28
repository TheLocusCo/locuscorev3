import React, { Component } from 'react'
import './style.css'

class LightBoxGenericContent extends Component {
  renderContent(props) {
    switch (props.mode) {
      case "currentLocation":
        return(
          <div className="ltbx-iframe-wrapper">
            <div className="ltbx-iframe-wrapper2">
              <div className="ltbx-iframe-scaler">
                <iframe
                  title="Current Location"
                  className="ltbx-iframe"
                  frameBorder="0"
                  allowFullScreen=""
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13447.490767300244!2d-97.4916871!3d32.5829191!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1527476717733"
                />
              </div>
            </div>
          </div>
        )
      default:
        return(
          <article className="portfolio-item">
            <h1 className="section-heading larger">{props.title}</h1>
            <div className="post-content">
              {props.content}
            </div>
          </article>
        )
    }
  }

  render() {
    return (
      <article className="portfolio-item">
        {this.renderContent(this.props)}
      </article>
    )
  }
}

export default LightBoxGenericContent
