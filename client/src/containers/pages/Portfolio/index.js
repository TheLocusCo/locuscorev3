import React, { Component } from 'react'
import { connect } from 'react-redux'

import GalleryBlock from 'containers/GalleryBlock'
import GalleryCategoryButtonsBlock from 'containers/GalleryCategoryButtonsBlock'
import { fetchResources } from 'redux/actions'

class Portfolio extends Component {
  componentWillMount() {
    this.props.dispatch(fetchResources('projects', 0, '', 'all'))
  }

  render() {
    const { projects, isFetching, activeCategory } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <GalleryCategoryButtonsBlock mode="projects" activeCategory={activeCategory}/>
            {isFetching && projects.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {projects.length === 0 && <h1 className="section-heading larger">No projects found!</h1>}
            {projects.length > 0 &&
              <GalleryBlock content={projects} activeCategory={activeCategory}/>
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projects.items,
  isFetching: state.projects.isFetching,
  activeCategory: state.activeCategory
})

export default connect(mapStateToProps)(Portfolio)
