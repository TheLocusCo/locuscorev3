import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import ContactFormBlock from '../ContactFormBlock'
import ContactFormButtonsBlock from '../ContactFormButtonsBlock'
import { fetchContactForms, setActiveContactForm } from "../../redux/actions"

class Contact extends Component {
  componentWillMount() {
    this.props.dispatch(fetchContactForms(window.innerWidth > 980 ? '' : 'withoutClassy'))
    if(window.innerWidth < 980) {
      this.props.dispatch(setActiveContactForm('Modern'))
    }
  }

  render() {
    return (
      <div className="main-content">
        <div className="page-content">
          <div className="address">
            <div className={window.innerWidth > 980 ? 'row' : 'mobile-row bold'}>
              <div className={window.innerWidth > 980 ? 'span6' : 'float-left'}>
                <p><strong>Louis Alridge</strong></p>
              </div>
              <div className={window.innerWidth > 980 ? 'span6' : 'float-right'}>
                <p>
                  {window.innerWidth > 980 &&
                    <div style={{display: 'inline-block', marginRight: '5px'}}>
                      <i className="icon-phone"></i>
                      <strong>Phone: </strong>
                    </div>
                  }
                  817 564 2697
                </p>
              </div>
            </div>
            <div className={window.innerWidth > 980 ? 'row' : 'mobile-row bold'}>
              <div className={window.innerWidth > 980 ? 'span6' : 'float-left'}>
                <p>Southwest Fort Worth</p>
              </div>
              <div className={window.innerWidth > 980 ? 'span6' : 'float-right'}>
                <p>
                  {window.innerWidth > 980 &&
                    <div style={{display: 'inline-block', marginRight: '5px'}}>
                      <i className="icon-mail"></i>
                      <strong>Email: </strong>
                    </div>
                  }
                  loualrid@gmail.com
                </p>
              </div>
            </div>
            <div className={window.innerWidth > 980 ? 'row' : 'mobile-row bold'}>
              <div className={window.innerWidth > 980 ? 'span6' : 'float-left'}>
                <p>Fort Worth, Texas 76126</p>
              </div>
              <div className={window.innerWidth > 980 ? 'span6' : 'float-right'}>
                <p>
                  {window.innerWidth > 980 &&
                    <div style={{display: 'inline-block', marginRight: '5px'}}>
                      <i className="icon-chat"></i>
                      <strong>Discord: </strong>
                    </div>
                  }
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
                {window.innerWidth > 980 &&
                  <ContactFormButtonsBlock contactForms={this.props.contactForms} activeContactForm={this.props.activeContactForm}/>
                }
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
