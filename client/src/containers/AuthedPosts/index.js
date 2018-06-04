import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import AuthedIndexTable from 'containers/AuthedIndexTable'
//import ReactCSSTransitionReplace from 'react-css-transition-replace'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SuccessBlock from 'containers/SuccessBlock'
import ErrorBlock from 'containers/ErrorBlock'
import PaginationContainer from 'containers/PaginationContainer'
import { fetchResources } from "redux/actions"

class AuthedPosts extends Component {
  componentWillMount() {
    this.props.dispatch(fetchResources('posts', this.props.currentPage.posts, '', 'withHidden'))
  }

  render() {
    const { posts, isFetching } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Posts
            </h1>
            <div className="box-dark centered">
              <Link className="button" to="/blog">
                <i className="icon-window"></i>
                Blog
              </Link>
            </div>
            <SuccessBlock content={this.props.successContent}/>
            <ErrorBlock content={this.props.errorContent}/>
            <span className="helper"/>
            {isFetching && posts.items.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {posts.items.length === 0 && <h1 className="section-heading larger">No posts found!</h1>}
            {posts.items.length > 0 &&
              <AuthedIndexTable items={posts.items} headers={this.props.headers.posts} itemIndex="posts" />
            }
            {posts.items.length > 0 && posts.totalPages > 1 &&
              <PaginationContainer items={posts} itemIndex="posts" />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  isFetching: state.posts.isFetching,
  headers: state.tableHeaders.tree,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(AuthedPosts)
