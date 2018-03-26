import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import AuthedIndexTable from '../AuthedIndexTable'
//import ReactCSSTransitionReplace from 'react-css-transition-replace'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SuccessBlock from '../SuccessBlock'
import ErrorBlock from '../ErrorBlock'
import PaginationContainer from '../PaginationContainer'
import { fetchMedia } from "../../redux/actions"

class Media extends Component {
  componentWillMount() {
    this.props.dispatch(fetchMedia("paginated", this.props.currentPage.media))
  }

  render() {
    const { media, isFetching } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Media
            </h1>
            <SuccessBlock content={this.props.successContent}/>
            <ErrorBlock content={this.props.errorContent}/>
            <span className="helper"/>
            {isFetching && media.items.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {media.items.length === 0 && <h1 className="section-heading larger">No media found!</h1>}
            {media.items.length > 0 &&
              <AuthedIndexTable items={media.items} headers={this.props.headers.media} itemIndex="media" />
            }
            {media.items.length > 0 && media.totalPages > 1 &&
              <PaginationContainer items={media} itemIndex="media" />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  media: state.media,
  isFetching: state.posts.isFetching,
  successContent: state.successMessages.items,
  headers: state.tableHeaders.tree,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(Media)
