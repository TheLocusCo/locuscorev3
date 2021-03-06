import React, { Component } from 'react'
import { connect } from 'react-redux'

import AuthedIndexTable from 'containers/iterators/AuthedIndexTable'
import SuccessBlock from 'containers/iterators/SuccessBlock'
import ErrorBlock from 'containers/iterators/ErrorBlock'
import PaginationContainer from 'containers/iterators/PaginationContainer'
import { fetchResources } from 'redux/actions'

class Visits extends Component {
  componentWillMount() {
    if(this.props.needsUpdate) {
      this.props.dispatch(fetchResources('visits', this.props.currentPage.visits))
    }
  }

  render() {
    const { visits, isFetching } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Visits
            </h1>
            <SuccessBlock content={this.props.successContent}/>
            <ErrorBlock content={this.props.errorContent}/>
            <span className="helper"/>
            {isFetching && visits.items.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {visits.items.length === 0 && <h1 className="section-heading larger">No visits found!</h1>}
            {visits.items.length > 0 &&
              <AuthedIndexTable items={visits.items} headers={this.props.headers.visits} itemIndex="visits" />
            }
            {visits.items.length > 0 && visits.totalPages > 1 &&
              <PaginationContainer items={visits} itemIndex="visits" />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  visits: state.visits,
  isFetching: state.visits.isFetching,
  headers: state.tableHeaders.tree,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage,
  needsUpdate: state.visits.needsUpdate
})

export default connect(mapStateToProps)(Visits)
