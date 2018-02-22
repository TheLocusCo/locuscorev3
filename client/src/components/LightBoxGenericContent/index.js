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
                <iframe title="Current Location" className="ltbx-iframe" frameBorder="0" allowFullScreen="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.862944504298!2d-121.95063178469337!3d37.39307337983081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc99e0b2555b3%3A0x6d7f80144aa3e474!2s730+Agnew+Rd%2C+Santa+Clara%2C+CA+95054!5e0!3m2!1sen!2sus!4v1510067822440" />
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
