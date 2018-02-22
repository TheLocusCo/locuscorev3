import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import AuthedIndexTable from '../AuthedIndexTable'
//import ReactCSSTransitionReplace from 'react-css-transition-replace'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SuccessBlock from '../SuccessBlock'
import ErrorBlock from '../ErrorBlock'
import PaginationContainer from '../PaginationContainer'
import { fetchProjects } from "../../redux/actions"

const headers = {
  name: "string",
  categories: "categories"
}

class AuthedProjects extends Component {
  componentWillMount() {
    this.props.dispatch(fetchProjects("paginated", this.props.currentPage.projects))
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
              <AuthedIndexTable items={projects.items} headers={headers} itemIndex="projects" />
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
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(AuthedProjects)
