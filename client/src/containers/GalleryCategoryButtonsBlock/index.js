import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'

import './style.css'
import { setActiveCategory, fetchCategories } from 'redux/actions'

class GalleryCategoryButtonsBlock extends Component {
  componentWillMount() {
    this.props.dispatch(fetchCategories(this.props.mode))
  }

  isActive(categoryName, props) {
    return("filter" + (categoryName === props.activeCategory.name ? " active" : ""))
  }

  setToActive(category, e) {
    this.props.dispatch(setActiveCategory(category))
  }

  renderGalleryCategoryButtons(props) {
    return props.categories.map(category => {
      return (
        <li
          key={category.id}
          onClick={(e) => this.setToActive(category, e)}
          className={this.isActive(category.name, props)}>
          {category.name}
        </li>
      )
    })
  }

  render() {
    const { categories, isFetching } = this.props
    return (
      <div className={window.innerWidth > 980 ? 'filter-tabs mixes' : 'mobile-filter-tabs filter-tabs mixes'}>
        {categories.length > 1 &&
          <ReactCSSTransitionGroup
            transitionName="long-fade"
            transitionAppearTimeout={3500}
            transitionEnterTimeout={2500}
            transitionLeaveTimeout={2500}
            transitionAppear={true}>
            <ul className="not-standard">
              { this.renderGalleryCategoryButtons(this.props) }
            </ul>
          </ReactCSSTransitionGroup>
        }
        {isFetching && categories.length === 0 && <h1 className="section-heading larger">Loading...</h1>}
        {categories.length === 0 && <h1 className="section-heading larger">No categories found!</h1>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.items,
  isFetching: state.categories.isFetching
})

export default connect(mapStateToProps)(GalleryCategoryButtonsBlock)
