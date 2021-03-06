import React, { Component } from 'react'
import { connect } from 'react-redux'

import AuthedIndexTable from 'containers/iterators/AuthedIndexTable'
import SuccessBlock from 'containers/iterators/SuccessBlock'
import ErrorBlock from 'containers/iterators/ErrorBlock'
import PaginationContainer from 'containers/iterators/PaginationContainer'
import { fetchResources } from 'redux/actions'

class Media extends Component {
  componentWillMount() {
    if(this.props.needsUpdate) {
      this.props.dispatch(fetchResources('media', this.props.currentPage.media, '', 'paginated'))
    }
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
  isFetching: state.media.isFetching,
  successContent: state.successMessages.items,
  headers: state.tableHeaders.tree,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage,
  needsUpdate: state.media.needsUpdate
})

export default connect(mapStateToProps)(Media)
