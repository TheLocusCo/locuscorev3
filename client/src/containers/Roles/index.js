import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import AuthedIndexTable from '../AuthedIndexTable'
//import ReactCSSTransitionReplace from 'react-css-transition-replace'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SuccessBlock from '../SuccessBlock'
import ErrorBlock from '../ErrorBlock'
import PaginationContainer from '../PaginationContainer'
import { fetchRoles } from "../../redux/actions"

const headers = {
  name: "string",
  pf_users: "string",
  pf_roles: "string"
}

class Roles extends Component {
  componentWillMount() {
    this.props.dispatch(fetchRoles(this.props.currentPage.roles))
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
              <AuthedIndexTable items={roles.items} headers={headers} itemIndex="roles" />
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
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(Roles)
