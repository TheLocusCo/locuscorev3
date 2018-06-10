import React, { Component } from 'react'
import { connect } from 'react-redux'
import AuthedIndexTable from 'containers/iterators/AuthedIndexTable'
import SuccessBlock from 'containers/iterators/SuccessBlock'
import ErrorBlock from 'containers/iterators/ErrorBlock'
import PaginationContainer from 'containers/iterators/PaginationContainer'
import { fetchResources } from 'redux/actions'

class Roles extends Component {
  componentWillMount() {
    this.props.dispatch(fetchResources('roles', this.props.currentPage.roles))
  }

  render() {
    const { roles, isFetching } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Roles
            </h1>
            <SuccessBlock content={this.props.successContent}/>
            <ErrorBlock content={this.props.errorContent}/>
            <span className="helper"/>
            {isFetching && roles.items.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {roles.items.length === 0 && <h1 className="section-heading larger">No roles found!</h1>}
            {roles.items.length > 0 &&
              <AuthedIndexTable items={roles.items} headers={this.props.headers.roles} itemIndex="roles" />
            }
            {roles.items.length > 0 && roles.totalPages > 1 &&
              <PaginationContainer items={roles} itemIndex="roles" />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  roles: state.roles,
  isFetching: state.posts.isFetching,
  headers: state.tableHeaders.tree,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(Roles)
