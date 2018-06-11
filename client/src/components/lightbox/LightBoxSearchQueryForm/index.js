import React from 'react'
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import { reduxForm } from 'redux-form'
import { Transition } from 'react-spring'

import './style.css'
import ErrorBlock from 'containers/iterators/ErrorBlock'
import RenderedSearchField from 'components/iteratorItems/RenderedSearchField'
import SearchFieldButton from 'components/buttons/SearchFieldButton'
import submit from 'components/lightbox/LightBoxSearchQueryForm/submit'
import { humanize } from 'utils/string'

let LightBoxSearchQueryForm = props => {
  const renderSearchFields = (ability, currentSearch, dispatch, change, index) => {
    if(ability[0] === "icon") {
      return null
    } else {
      return (
        <Transition
          native
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          key={index}>
          { styles => currentSearch.fields.includes(ability[0]) ? <RenderedSearchField ability={ability} currentSearch={currentSearch} dispatch={dispatch} index={index} styles={styles} /> : <SearchFieldButton ability={ability} currentSearch={currentSearch} dispatch={dispatch} change={change} index={index} styles={styles} /> }
        </Transition>
      )
    }
  }

  const { handleSubmit, pristine, submitting, errorContent, searchAbility, currentSearch, dispatch, change } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <ReactTooltip />
      <ErrorBlock content={errorContent} />
        {Object.entries(searchAbility[currentSearch.model]).map((ability, index) =>
          renderSearchFields(ability, currentSearch, dispatch, change, index * 2)
        )}
      <div className="form-button centered">
        <button type="submit" className="button centered" disabled={pristine || submitting}>Submit your search for {humanize(currentSearch.model)}</button>
      </div>
    </form>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
LightBoxSearchQueryForm = reduxForm({
  enableReinitialize: true,
  form: 'LightBoxSearchQueryForm' // a unique identifier for this form
})(LightBoxSearchQueryForm)

// You have to connect() to any reducers that you wish to connect to yourself
LightBoxSearchQueryForm = connect(
  state => ({
    initialValues: {model: state.currentSearch.model}
  })
)(LightBoxSearchQueryForm)

export default connect()(LightBoxSearchQueryForm)
