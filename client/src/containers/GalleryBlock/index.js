import React, { Component } from 'react'
import './style.css'
//import { connect } from "react-redux"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import GalleryItem from '../../components/GalleryItem'
import MangaGalleryItem from '../../components/MangaGalleryItem'

class GalleryBlock extends Component {
  renderContent(props) {
    return props.content.map(indivProps => {
      if (indivProps.categories.filter(item => item.name === props.activeCategory.name).length > 0) {
        switch (props.type) {
          case "mangas":
            return (
              <MangaGalleryItem {...indivProps} key={indivProps.id}/>
            )
          default:
            return (
              <GalleryItem {...indivProps} key={indivProps.id}/>
            )
        }
      } else {
        return null
      }
    })
  }

  render() {
    return (
      <ul className={window.innerWidth > 980 ? 'portfolio-grid' : 'mobile-grid portfolio-grid'}>
        <ReactCSSTransitionGroup transitionName="group-fade-wait" transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {this.renderContent(this.props)}
        </ReactCSSTransitionGroup>
      </ul>
    )
  }
}

export default GalleryBlock
