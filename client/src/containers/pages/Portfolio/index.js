import React, { Component } from 'react'
import { connect } from 'react-redux'

import GalleryBlock from 'containers/iterators/GalleryBlock'
import GalleryCategoryButtonsBlock from 'containers/iterators/GalleryCategoryButtonsBlock'
import { fetchResources } from 'redux/actions'

class Portfolio extends Component {
  componentWillMount() {
    if(this.props.needsUpdate) {
      this.props.dispatch(fetchResources('projects', 0, '', 'all'))
    }
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
  projects: state.projects.filteredItems,
  isFetching: state.projects.isFetching,
  activeCategory: state.projects.activeCategory,
  needsUpdate: state.projects.needsUpdate
})

export default connect(mapStateToProps)(Portfolio)
