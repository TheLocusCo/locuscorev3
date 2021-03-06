import React, { Component } from 'react'
import { connect } from 'react-redux'

import AuthedIndexTable from 'containers/iterators/AuthedIndexTable'
import SuccessBlock from 'containers/iterators/SuccessBlock'
import ErrorBlock from 'containers/iterators/ErrorBlock'
import PaginationContainer from 'containers/iterators/PaginationContainer'
import { fetchResources } from 'redux/actions'

class Resumes extends Component {
  componentWillMount() {
    if(this.props.needsUpdate) {
      this.props.dispatch(fetchResources('resumes', this.props.currentPage.resumes))
    }
  }

  render() {
    const { resumes, isFetching } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Resumes
            </h1>
            <SuccessBlock content={this.props.successContent}/>
            <ErrorBlock content={this.props.errorContent}/>
            <span className="helper"/>
            {isFetching && resumes.items.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {resumes.items.length === 0 && <h1 className="section-heading larger">No resumes found!</h1>}
            {resumes.items.length > 0 &&
              <AuthedIndexTable items={resumes.items} headers={this.props.headers.resumes} itemIndex="resumes" />
            }
            {resumes.items.length > 0 && resumes.totalPages > 1 &&
              <PaginationContainer items={resumes} itemIndex="resumes" />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  resumes: state.resumes,
  isFetching: state.resumes.isFetching,
  headers: state.tableHeaders.tree,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage,
  needsUpdate: state.resumes.needsUpdate
})

export default connect(mapStateToProps)(Resumes)
