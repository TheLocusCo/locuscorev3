import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AuthedIndexTable from 'containers/iterators/AuthedIndexTable'
import SuccessBlock from 'containers/iterators/SuccessBlock'
import ErrorBlock from 'containers/iterators/ErrorBlock'
import PaginationContainer from 'containers/iterators/PaginationContainer'
import { fetchResources } from 'redux/actions'

class Mangas extends Component {
  componentWillMount() {
    if(this.props.needsUpdate || this.props.mangas.items.length > 10) {
      this.props.dispatch(fetchResources('mangas', this.props.currentPage.mangas, '', 'paginated'))
    }
  }

  render() {
    const { mangas, isFetching } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Manga
            </h1>
            <div className="box-dark centered">
              <Link className="button" to="/manga_gallery">
                <i className="icon-window"></i>
                Manga Gallery
              </Link>
            </div>
            <SuccessBlock content={this.props.successContent}/>
            <ErrorBlock content={this.props.errorContent}/>
            <span className="helper"/>
            {isFetching && mangas.items.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {mangas.items.length === 0 && <h1 className="section-heading larger">No manga found!</h1>}
            {mangas.items.length > 0 &&
              <AuthedIndexTable items={mangas.items} headers={this.props.headers.mangas} itemIndex="mangas" />
            }
            {mangas.items.length > 0 && mangas.totalPages > 1 &&
              <PaginationContainer items={mangas} itemIndex="mangas" />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  mangas: state.mangas,
  isFetching: state.mangas.isFetching,
  headers: state.tableHeaders.tree,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage,
  needsUpdate: state.mangas.needsUpdate
})

export default connect(mapStateToProps)(Mangas)
