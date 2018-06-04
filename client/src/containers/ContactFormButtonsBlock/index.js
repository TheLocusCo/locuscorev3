import React, { Component } from 'react'
import { connect } from "react-redux"

import './style.css'
import { setActiveContactForm } from 'redux/actions'

class ContactFormButtonsBlock extends Component {
  isActive(contactFormName, props) {
    return("filter" + (contactFormName === props.activeContactForm.name ? " active" : ""))
  }

  setToActive(contactFormName, e) {
    this.props.dispatch(setActiveContactForm(contactFormName))
  }

  renderContactFormButtons(props) {
    var count = 0
    return props.contactForms.map(contactForm => {
      count++
      return (
        <li key={count} onClick={(e) => this.setToActive(contactForm.name, e)} className={this.isActive(contactForm.name, props)}>{contactForm.name}</li>
      )
    })
  }

  render() {
    if(this.props.activeContactForm.name === "Submitted")
      return null
    else {
      const { contactForms } = this.props
      return (
        <div className="controls">
          <h2>
            <span>Contact Form Type</span>
          </h2>
          {contactForms.length > 0 &&
            <ul className="connected-buttons">
              { this.renderContactFormButtons(this.props) }
            </ul>
          }
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(ContactFormButtonsBlock)
