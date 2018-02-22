import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import ShortcutsBlock from '../ShortcutsBlock'
import PaginationContainer from '../PaginationContainer'
//import TabsButton from '../../components/TabsButton'
//import ReactCSSTransitionReplace from 'react-css-transition-replace'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { fetchPosts } from "../../redux/actions"

class Blog extends Component {
  componentWillMount() {
    this.props.dispatch(fetchPosts("withoutHidden", this.props.currentPage.posts))
  }

  render() {
    const { posts, isFetching } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Blog
            </h1>
            <span className="helper"/>
            {isFetching && posts.items.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {posts.items.length === 0 && <h1 className="section-heading larger">No posts found!</h1>}
            {posts.items.length > 0 &&
              <ShortcutsBlock content={posts.items}/>
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
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(Blog)
