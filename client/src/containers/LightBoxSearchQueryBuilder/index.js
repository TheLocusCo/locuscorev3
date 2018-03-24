import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//import GalleryItem from '../../components/GalleryItem'
import { updateCurrentSearch } from "../../redux/actions"

class LightBoxSearchQueryBuilder extends Component {
  humanize(text) {
    return (text.charAt(0).toUpperCase() + text.slice(1).replace(/_/gi, ' '))
  }

  renderSearchAbility(abilities, currentSearch) {
    let count = 0
    return Object.entries(abilities).map(ability => {
      if(Object.keys(currentSearch).length === 0) {
        count += 1
        return (
          <div key={count} onClick={() => this.props.dispatch(updateCurrentSearch({model: ability[0]}))} title={"Search" + ability[0]} className="button full-width-button">
            <i className={"icon-" + ability[1].icon}/>Search {this.humanize(ability[0])}
          </div>
        )
      }
    })
  }

  renderSearchChoices(abilities) {
    let count = 0
    return Object.entries(abilities).map(ability => {
      if(ability[0] === "icon") {
        return null
      } else {
        count += 1
        return (
          <div key={count} onClick={() => this.props.dispatch(updateCurrentSearch({field: ability[0], nestedAction: ability[1].nested_action}))} title={ability[1].logical} className="button full-width-button">
            <i className={"icon-" + ability[1].icon}/>{ability[1].logical}
          </div>
        )
      }
    })
  }

  render() {
    const { searchAbility, currentSearch } = this.props
    return (
      <article className="portfolio-item">
        {Object.keys(currentSearch).length === 0 &&
          <h1 key={0} className="section-heading larger">Search</h1>
        }
        {currentSearch.model &&
          <h1 key={0} className="section-heading larger">Searching {this.humanize(currentSearch.model)}</h1>
        }
        <ReactCSSTransitionGroup transitionName="group-fade-wait" transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {this.renderSearchAbility(searchAbility, currentSearch)}
        </ReactCSSTransitionGroup>

        {currentSearch.model &&
          <ReactCSSTransitionGroup transitionName="group-fade-wait" transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {this.renderSearchChoices(searchAbility[currentSearch.model])}
          </ReactCSSTransitionGroup>
        }
      </article>
    )
  }
}

const mapStateToProps = state => ({
  currentSearch: state.search.currentSearch
})

export default connect(mapStateToProps)(LightBoxSearchQueryBuilder)
