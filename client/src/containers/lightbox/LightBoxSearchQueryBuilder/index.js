import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Route } from 'react-router-dom'

import { humanize } from 'utils/string'
import LightBoxSearchQueryForm from 'components/lightbox/LightBoxSearchQueryForm'
import { updateCurrentSearchModel } from 'redux/actions'

class LightBoxSearchQueryBuilder extends Component {
  renderSearchAbility(abilities, currentSearch) {
    let count = 0
    return Object.entries(abilities).map(ability => {
      if(currentSearch.model === "") {
        count += 1
        return (
          <div key={count} onClick={() => this.props.dispatch(updateCurrentSearchModel(ability[0]))} title={"Search" + ability[0]} className="button full-width-button">
            <i className={"icon-" + ability[1].icon}/>Search {humanize(ability[0])}
          </div>
        )
      } else {
        return null
      }
    })
  }

  render() {
    const { searchAbility, currentSearch, errorContent } = this.props
    return (
      <Route render={({history}) => (
        <article className="portfolio-item">
          {currentSearch.model === "" &&
            <h1 key={0} className="section-heading larger">Search</h1>
          }
          {currentSearch.model !== "" &&
            <h1 key={0} className="section-heading larger">Searching {humanize(currentSearch.model)}</h1>
          }
          <ReactCSSTransitionGroup transitionName="group-fade-wait" transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {this.renderSearchAbility(searchAbility, currentSearch)}
          </ReactCSSTransitionGroup>
          {currentSearch.model !== "" &&
            <LightBoxSearchQueryForm history={history} searchAbility={searchAbility} currentSearch={currentSearch} errorContent={errorContent}/>
          }
        </article>
      )}/>
    )
  }
}

const mapStateToProps = state => ({
  currentSearch: state.currentSearch,
  errorContent: state.errorMessages.items
})

export default connect(mapStateToProps)(LightBoxSearchQueryBuilder)
