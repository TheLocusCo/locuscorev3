import React, { Component } from 'react'

import './style.css'
import { setActiveContactForm, createNotification } from 'redux/actions'
import { connect } from 'react-redux'


const validInput = { borderBottom: "3px solid #4CAF50" }
const invalidInput = { borderBottom: "3px solid #F44336" }

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
      activePostCard: "Tesla"
    }
    this.submit = this.submit.bind(this)
  }

  submit() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let day = currentDate.getDate();
    let oneYearFromNow = new Date(year + 1, month, day)
    const notification = {
      from_name: this.state.name,
      from_email: this.state.email,
      icon: "mail",
      content: this.state.message,
      start_displaying_at: currentDate,
      stops_displaying_at: oneYearFromNow
    }
    this.props.dispatch(setActiveContactForm("Submitted"))
    this.props.dispatch(createNotification(notification))
  }

  validateEmail() {
    if (this.state.email.length < 1) return {}
    return /@/.test(this.state.email) ? validInput : invalidInput
  }

  validateMessage() {
    if (this.state.message.length < 1) return {}
    if (this.state.message.length < 10) return invalidInput
    if (this.state.message.length >= 10) return validInput
  }

  handleChange(input, e) {
    this.setState({ [input]: e.target.value })
  }

  isActiveStamp(stampName) {
    return (this.state.activePostCard === stampName ? "active" : "display-none")
  }

  setStampToActive(stampName) {
    this.setState({activePostCard: stampName})
  }

  renderContent(props) {
    switch (props.activeContactForm.name) {
      case "Modern":
        return(
          <div className="box-dark">
            <h2 className="section-heading">Let's Talk...<span className="helper" /></h2>
            <p className="centered explanation">Contact me with this form. I'll get back to you ASAP.</p>
            <div className="contact-form">
              <fieldset className="centered">
                <div className={window.innerWidth > 980 ? 'user-data' : ''}>
                  <input type="text" name="name" placeholder="Your name" onChange={e => { this.handleChange("name", e) }} value={this.state.name} />
                  <input type="text" name="email" placeholder="Your Email Address" onChange={e => { this.handleChange("email", e) }} value={this.state.email} style={this.validateEmail()} />
                </div>
                <div className="message">
                  <textarea name="message" placeholder="Your Message..." onChange={e => { this.handleChange("message", e) }} value={this.state.message} style={this.validateMessage()} />
                </div>
                <div className="submit">
                  <input type="submit" name="commit" value="Send Message" className="button large" onClick={this.submit} />
                </div>
              </fieldset>
            </div>
          </div>
        )
      case "Classy":
        return(
          <div className="postcard-container">
            <div>
              <div className="postcard">
                <div className="contact-form">
                  <h2>Message:</h2>
                  <fieldset>
                    <p>To: Louis Alridge</p>
                    <div>
                      <input type="text" name="name" placeholder="Your Name" onChange={e => { this.handleChange("name", e) }} value={this.state.name} />
                    </div>
                    <div>
                      <input type="text" name="email" placeholder="Your Email Address" onChange={e => { this.handleChange("email", e) }} value={this.state.email} style={this.validateEmail()} />
                    </div>
                  </fieldset>
                  <textarea name="message" id="message" placeholder="Your Message..." onChange={e => { this.handleChange("message", e) }} value={this.state.message} style={this.validateMessage()} />
                  <input type="submit" name="commit" value="Send" className="button button-submit" onClick={this.submit} />
                  <div className={"tesla-stamp stamp " + this.isActiveStamp("Tesla")} onClick={e => { this.setStampToActive("DaVinci") }} />
                  <div className={"davinci-stamp stamp " + this.isActiveStamp("DaVinci")} onClick={e => { this.setStampToActive("Jobs") }} />
                  <div className={"jobs-stamp stamp " + this.isActiveStamp("Jobs")} onClick={e => { this.setStampToActive("Tesla") }} />
                  <div className="stamp-mark" />
                </div>
              </div>
            </div>
          </div>
        )
      case "Submitted":
        return(
          <div className="box-dark">
            <h2 className="section-heading">Thanks for your message! It will be read ASAP.<span className="helper" /></h2>
            <p className="centered explanation">If you don't receive correspondance in a timely manner, feel free to use the above email.</p>
          </div>
        )
      default: return null
    }
  }

  render() {
    return (
      this.renderContent(this.props)
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(ContactForm)
