import React, { Component } from 'react'
//import { connect } from "react-redux"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//import ReactCSSTransitionReplace from 'react-css-transition-replace'
import ContactForm from 'components/ContactForm'

class ContactFormBlock extends Component {
  renderContent(props) {
    return props.content.map(indivProps => {
      if (indivProps.name === props.activeContactForm.name) {
        return (
          <ContactForm {...indivProps} activeContactForm={props.activeContactForm} key={indivProps.id}/>
        )
      } else if(props.activeContactForm.name === "Submitted") {
        return (
          <ContactForm activeContactForm={props.activeContactForm} key={10}/>
        )
      } else {
        return null
      }
    })
  }

  render() {
    return (
      <div className="panes">
        <ReactCSSTransitionGroup transitionName="group-fade-wait" transitionAppearTimeout={1500} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true}>
          {this.renderContent(this.props)}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default ContactFormBlock
