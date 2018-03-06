import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import GalleryBlock from '../GalleryBlock'
import GalleryCategoryButtonsBlock from '../GalleryCategoryButtonsBlock'
import { fetchMangas, cleanupAfterGallery } from "../../redux/actions"

class MangaGallery extends Component {
  componentWillMount() {
    this.props.dispatch(fetchMangas("all", 0))
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
  mangas: state.mangas.items,
  isFetching: state.posts.isFetching,
  activeCategory: state.activeCategory
})

export default connect(mapStateToProps)(MangaGallery)