import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginForm from 'components/LoginForm'
import ErrorBlock from 'containers/ErrorBlock'
import { userLogin } from 'redux/actions'

function submit(values, dispatch) {
  return dispatch(userLogin(values))
}

class Login extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Login
            </h1>
            <span className="helper"/>

            <ErrorBlock content={this.props.errorContent} bypassKeys={true} />
            <LoginForm onSubmit={submit}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errorContent: state.errorMessages.items
})

export default connect(mapStateToProps)(Login)
