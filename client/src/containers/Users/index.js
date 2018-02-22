import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import AuthedIndexTable from '../AuthedIndexTable'
//import ReactCSSTransitionReplace from 'react-css-transition-replace'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SuccessBlock from '../SuccessBlock'
import ErrorBlock from '../ErrorBlock'
import PaginationContainer from '../PaginationContainer'
import { fetchUsers } from "../../redux/actions"

const headers = {
  username: "string",
  current_sign_in_ip: "string",
  locked: "boolean",
  role: "string"
}

class Users extends Component {
  componentWillMount() {
    this.props.dispatch(fetchUsers(this.props.currentPage.users))
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
              <AuthedIndexTable items={users.items} headers={headers} itemIndex="users" />
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
  isFetching: state.posts.isFetching,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(Users)
