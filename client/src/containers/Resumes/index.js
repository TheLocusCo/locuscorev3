import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import AuthedIndexTable from '../AuthedIndexTable'
//import ReactCSSTransitionReplace from 'react-css-transition-replace'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SuccessBlock from '../SuccessBlock'
import ErrorBlock from '../ErrorBlock'
import PaginationContainer from '../PaginationContainer'
import { fetchResumes } from "../../redux/actions"

class Resumes extends Component {
  componentWillMount() {
    this.props.dispatch(fetchResumes(this.props.currentPage.resumes))
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
  isFetching: state.posts.isFetching,
  headers: state.tableHeaders.tree,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(Resumes)
