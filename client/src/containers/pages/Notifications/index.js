import React, { Component } from 'react'
import { connect } from 'react-redux'

import AuthedIndexTable from 'containers/AuthedIndexTable'
import SuccessBlock from 'containers/SuccessBlock'
import ErrorBlock from 'containers/ErrorBlock'
import PaginationContainer from 'containers/PaginationContainer'
import { fetchResources } from 'redux/actions'

class Notifications extends Component {
  componentWillMount() {
    this.props.dispatch(fetchResources('notifications', this.props.currentPage.notifications))
  }

  render() {
    const { notifications, isFetching } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Notifications
            </h1>
            <SuccessBlock content={this.props.successContent}/>
            <ErrorBlock content={this.props.errorContent}/>
            <span className="helper"/>
            {isFetching && notifications.items.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {notifications.items.length === 0 && <h1 className="section-heading larger">No notifications found!</h1>}
            {notifications.items.length > 0 &&
              <AuthedIndexTable items={notifications.items} headers={this.props.headers.notifications} itemIndex="notifications" />
            }
            {notifications.items.length > 0 && notifications.totalPages > 1 &&
              <PaginationContainer items={notifications} itemIndex="notifications" />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications,
  isFetching: state.notifications.isFetching,
  headers: state.tableHeaders.tree,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(Notifications)
