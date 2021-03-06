import React, { Component } from 'react'
import { connect } from 'react-redux'

import AuthedIndexTable from 'containers/iterators/AuthedIndexTable'
import SuccessBlock from 'containers/iterators/SuccessBlock'
import ErrorBlock from 'containers/iterators/ErrorBlock'
import PaginationContainer from 'containers/iterators/PaginationContainer'
import { fetchResources } from 'redux/actions'

class Users extends Component {
  componentWillMount() {
    this.props.dispatch(fetchResources('users', this.props.currentPage.users))
  }

  render() {
    const { users, isFetching } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Users
            </h1>
            <SuccessBlock content={this.props.successContent}/>
            <ErrorBlock content={this.props.errorContent}/>
            <span className="helper"/>
            {isFetching && users.items.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {users.items.length === 0 && <h1 className="section-heading larger">No users found!</h1>}
            {users.items.length > 0 &&
              <AuthedIndexTable items={users.items} headers={this.props.headers.users} itemIndex="users" />
            }
            {users.items.length > 0 && users.totalPages > 1 &&
              <PaginationContainer items={users} itemIndex="users" />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
  isFetching: state.users.isFetching,
  headers: state.tableHeaders.tree,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage,
  needsUpdate: state.users.needsUpdate
})

export default connect(mapStateToProps)(Users)
