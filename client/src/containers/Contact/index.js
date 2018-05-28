import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import ContactFormBlock from '../ContactFormBlock'
import ContactFormButtonsBlock from '../ContactFormButtonsBlock'
import { fetchContactForms } from "../../redux/actions"

class Contact extends Component {
  componentWillMount() {
    this.props.dispatch(fetchContactForms())
  }

  render() {
    return (
      <div className="main-content">
        <div className="page-content">
          <div className="address">
            <div className="row">
              <div className="span6">
                <p><strong>Louis Alridge</strong></p>
              </div>
              <div className="span6">
                <p>
                  <i className="icon-phone"></i>
                  <strong>Phone: </strong>
                  817 564 2697
                </p>
              </div>
            </div>
            <div className="row">
              <div className="span6">
                <p>Southwest Fort Worth</p>
              </div>
              <div className="span6">
                <p>
                  <i className="icon-mail"></i>
                  <strong>Email: </strong>
                  loualrid@gmail.com
                </p>
              </div>
            </div>
            <div className="row">
              <div className="span6">
                <p>Fort Worth, Texas 76126</p>
              </div>
              <div className="span6">
              <p>
                <i className="icon-chat"></i>
                <strong>Discord: </strong>
                MrLocus#6193
              </p>
              </div>
            </div>
          </div>
          <div className="centered address-adjust">
            <Link to="/google_maps_location" className="button small">
              View My Location
            </Link>
          </div>
            {this.props.contactForms.length > 0 &&
              <div className="content-switch">
                <ContactFormButtonsBlock contactForms={this.props.contactForms} activeContactForm={this.props.activeContactForm}/>
                <ContactFormBlock content={this.props.contactForms} activeContactForm={this.props.activeContactForm}/>
              </div>
            }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  contactForms: state.contactForms.items,
  activeContactForm: state.activeContactForm,
  isFetching: state.contactForms.isFetching,
})

export default connect(mapStateToProps)(Contact)
