import React, { Component } from 'react'
import { Transition } from 'react-spring'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './style.css'
import GalleryItem from 'components/iteratorItems/GalleryItem'
import MangaGalleryItem from 'components/iteratorItems/MangaGalleryItem'

class GalleryBlock extends Component {
  renderContent(indivProps, type, styles) {
    switch (type) {
      case "mangas":
        return (
          <MangaGalleryItem {...indivProps} styles={styles} key={indivProps.id}/>
        )
      default:
        return (
          <GalleryItem {...indivProps} styles={styles} key={indivProps.id}/>
        )
    }
  }

  render() {
    return (
      <ul className={window.innerWidth > 980 ? 'portfolio-grid' : 'mobile-grid portfolio-grid'}>
        <Transition
          native
          keys={this.props.content.map(item => item.id)}
          from={{ width: 0, opacity: 0, display: 'inline-block' }}
          enter={{ width: 262, opacity: 1, display: 'inline-block' }}
          leave={{ width: 0, opacity: 0, display: 'none' }}>
          {this.props.content.map(item =>
            styles => this.renderContent(item, this.props.type, styles))
          }
        </Transition>
      </ul>
    )
  }
}

export default GalleryBlock
