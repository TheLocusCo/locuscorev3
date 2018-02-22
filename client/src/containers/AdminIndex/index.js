import React, { Component } from 'react'
import './style.css'
import ShortcutsBlock from '../ShortcutsBlock'
import { connect } from "react-redux"
import { fetchAdminShortcuts } from "../../redux/actions"

class AdminIndex extends Component {
  componentWillMount() {
    this.props.dispatch(fetchAdminShortcuts(this.props.currentUser.role))
  }

  render() {
    return (
      <div className="main-content">
        <div className="page-content">
          <div className="welcome-block">
            <h1 className="section-heading larger">
              Admin Index
            </h1>
            <span className="helper"/>
          </div>
          {this.props.adminShortcuts.length > 0 &&
            <ShortcutsBlock content={this.props.adminShortcuts} />
          }
        </div>
      </div>
    )
  }
}
// Test

const mapStateToProps = state => ({
  adminShortcuts: state.adminShortcuts.items,
})

export default connect(mapStateToProps)(AdminIndex)
