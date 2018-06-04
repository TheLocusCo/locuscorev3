import React, { Component } from 'react'
import { connect } from "react-redux"
import AuthedIndexTable from 'containers/AuthedIndexTable'
//import ReactCSSTransitionReplace from 'react-css-transition-replace'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SuccessBlock from 'containers/SuccessBlock'
import ErrorBlock from 'containers/ErrorBlock'
import PaginationContainer from 'containers/PaginationContainer'
import { fetchResources } from 'redux/actions'

class Comments extends Component {
  componentWillMount() {
    this.props.dispatch(fetchResources('comments', this.props.currentPage.comments))
  }

  render() {
    const { comments, isFetching } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Comments
            </h1>
            <SuccessBlock content={this.props.successContent}/>
            <ErrorBlock content={this.props.errorContent}/>
            <span className="helper"/>
            {isFetching && comments.items.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {comments.items.length === 0 && <h1 className="section-heading larger">No comments found!</h1>}
            {comments.items.length > 0 &&
              <AuthedIndexTable items={comments.items} headers={this.props.headers.comments} itemIndex="comments" />
            }
            {comments.items.length > 0 && comments.totalPages > 1 &&
              <PaginationContainer items={comments} itemIndex="comments" />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
  isFetching: state.posts.isFetching,
  headers: state.tableHeaders.tree,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(Comments)
