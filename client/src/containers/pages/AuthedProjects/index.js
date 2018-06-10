import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

import AuthedIndexTable from 'containers/AuthedIndexTable'
import SuccessBlock from 'containers/SuccessBlock'
import ErrorBlock from 'containers/ErrorBlock'
import PaginationContainer from 'containers/PaginationContainer'
import { fetchResources } from 'redux/actions'

class AuthedProjects extends Component {
  componentWillMount() {
    this.props.dispatch(fetchResources('projects', this.props.currentPage.projects, '', 'paginated'))
  }

  render() {
    const { projects, isFetching } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <h1 className="section-heading larger">
              Projects
            </h1>
            <div className="box-dark centered">
              <Link className="button" to="/portfolio">
                <i className="icon-window"></i>
                Portfolio
              </Link>
            </div>
            <SuccessBlock content={this.props.successContent}/>
            <ErrorBlock content={this.props.errorContent}/>
            <span className="helper"/>
            {isFetching && projects.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {projects.items.length === 0 && <h1 className="section-heading larger">No projects found!</h1>}
            {projects.items.length > 0 &&
              <AuthedIndexTable items={projects.items} headers={this.props.headers.projects} itemIndex="projects" />
            }
            {projects.items.length > 0 && projects.totalPages > 1 &&
              <PaginationContainer items={projects} itemIndex="projects" />
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  isFetching: state.posts.isFetching,
  headers: state.tableHeaders.tree,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(AuthedProjects)
