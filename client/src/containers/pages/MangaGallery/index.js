import React, { Component } from 'react'
import { connect } from 'react-redux'

import GalleryBlock from 'containers/iterators/GalleryBlock'
import GalleryCategoryButtonsBlock from 'containers/iterators/GalleryCategoryButtonsBlock'
import { fetchResources, cleanupAfterGallery } from 'redux/actions'

class MangaGallery extends Component {
  componentWillMount() {
    this.props.dispatch(fetchResources('mangas', 0, '', 'all'))
  }

  componentWillUnmount() {
    this.props.dispatch(cleanupAfterGallery("mangas"))
  }

  render() {
    const { mangas, isFetching, activeCategory } = this.props
    return (
      <div className="main-content">
        <div className="page-content">
          <div>
            <GalleryCategoryButtonsBlock mode="mangas" activeCategory={activeCategory}/>
            {isFetching && mangas.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
            {mangas.length === 0 && <h1 className="section-heading larger">No mangas found!</h1>}
            {mangas.length > 0 &&
              <GalleryBlock content={mangas} activeCategory={activeCategory} type="mangas"/>
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  mangas: state.mangas.filteredItems,
  isFetching: state.posts.isFetching,
  activeCategory: state.mangas.activeCategory
})

export default connect(mapStateToProps)(MangaGallery)
