import React, { Component } from 'react'
import { connect } from "react-redux"

import './style.css'
import ContactContent from 'components/ContactContent'
import { fetchContactForms, setActiveContactForm } from 'redux/actions'

class Contact extends Component {
  componentWillMount() {
    this.props.dispatch(fetchContactForms(window.innerWidth > 980 ? '' : 'withoutClassy'))
    if(window.innerWidth < 980) {
      this.props.dispatch(setActiveContactForm('Modern'))
    }
  }

  render() {
    return (
      <ContactContent {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  contactForms: state.contactForms.items,
  activeContactForm: state.activeContactForm,
  isFetching: state.contactForms.isFetching,
})

export default connect(mapStateToProps)(Contact)
