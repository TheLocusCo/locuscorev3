import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import LightBoxSearchQueryForm from '../../components/LightBoxSearchQueryForm'
import { updateCurrentSearchModel } from "../../redux/actions"

class LightBoxSearchQueryBuilder extends Component {
  humanize(text) {
    return (text.charAt(0).toUpperCase() + text.slice(1).replace(/_/gi, ' '))
  }

  renderSearchAbility(abilities, currentSearch) {
    let count = 0
    return Object.entries(abilities).map(ability => {
      if(currentSearch.model === "") {
        count += 1
        return (
          <div key={count} onClick={() => this.props.dispatch(updateCurrentSearchModel(ability[0]))} title={"Search" + ability[0]} className="button full-width-button">
            <i className={"icon-" + ability[1].icon}/>Search {this.humanize(ability[0])}
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
      <article className="portfolio-item">
        {currentSearch.model === "" &&
          <h1 key={0} className="section-heading larger">Search</h1>
        }
        {currentSearch.model !== "" &&
          <h1 key={0} className="section-heading larger">Searching {this.humanize(currentSearch.model)}</h1>
        }
        <ReactCSSTransitionGroup transitionName="group-fade-wait" transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {this.renderSearchAbility(searchAbility, currentSearch)}
        </ReactCSSTransitionGroup>
        {currentSearch.model !== "" &&
          <LightBoxSearchQueryForm searchAbility={searchAbility} currentSearch={currentSearch} errorContent={errorContent}/>
        }
      </article>
    )
  }
}

const mapStateToProps = state => ({
  currentSearch: state.currentSearch,
  errorContent: state.errorMessages.items
})

export default connect(mapStateToProps)(LightBoxSearchQueryBuilder)