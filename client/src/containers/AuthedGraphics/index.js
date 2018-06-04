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

class AuthedGraphics extends Component {
  componentWillMount() {
    this.props.dispatch(fetchResources('graphics', this.props.currentPage.graphics))
  }

  render() {
    const { graphics, isFetching } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Web Graphics
            </h1>
            <div className="box-dark centered">
              <Link className="button" to="/graphics_welcome">
                <i className="icon-window"></i>
                Graphics
              </Link>
            </div>
            <SuccessBlock content={this.props.successContent}/>
            <ErrorBlock content={this.props.errorContent}/>
            <span className="helper"/>
            {isFetching && graphics.items.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {graphics.items.length === 0 && <h1 className="section-heading larger">No web graphics found!</h1>}
            {graphics.items.length > 0 &&
              <AuthedIndexTable items={graphics.items} headers={this.props.headers.graphics} itemIndex="graphics" />
            }
            {graphics.items.length > 0 && graphics.totalPages > 1 &&
              <PaginationContainer items={graphics} itemIndex="graphics" />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  graphics: state.graphics,
  isFetching: state.posts.isFetching,
  headers: state.tableHeaders.tree,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(AuthedGraphics)
