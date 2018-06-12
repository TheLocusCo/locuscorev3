import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Transition, animated } from 'react-spring'
import { Route } from 'react-router-dom'

import { humanize } from 'utils/string'
import LightBoxSearchQueryForm from 'components/lightbox/LightBoxSearchQueryForm'
import { updateCurrentSearchModelAndTree } from 'redux/actions'

class LightBoxSearchQueryBuilder extends Component {
  renderSearchAbility(ability, index, currentSearch, styles) {
    if(currentSearch.model) {
      return null
    } else {
      return (
        <animated.div
          style={styles}
          key={index}
          onClick={() => this.props.dispatch(updateCurrentSearchModelAndTree(ability[0]))}
          title={'Search ' + ability[0]}
          className="button full-width-button">
          <i className={"icon-" + ability[1].icon}/>Search {humanize(ability[0])}
        </animated.div>
      )
    }
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
          <Transition
            native
            keys={Object.entries(searchAbility).map((ability, index) => index)}
            from={{ height: 0, opacity: 0, marginBottom: 0, fontSize: 0 }}
            enter={{ height: 30, opacity: 1, marginBottom: 15, fontSize: 13 }}
            leave={{ height: 0, opacity: 0, marginBottom: 0, fontSize: 0 }}>
            {Object.entries(searchAbility).map((ability, index) =>
              styles => this.renderSearchAbility(ability, index, currentSearch, styles)
            )}
          </Transition>
          {currentSearch.model !== "" &&
            <LightBoxSearchQueryForm
              history={history}
              searchAbility={searchAbility}
              currentSearch={currentSearch}
              errorContent={errorContent}
            />
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
