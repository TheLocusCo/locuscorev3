import React from 'react'
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import { Field, reduxForm } from 'redux-form'

import MenuItem from 'material-ui/MenuItem'
import { TextField, Checkbox, SelectField, DatePicker } from 'redux-form-material-ui'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ErrorBlock from '../../../containers/ErrorBlock'
import submit from './submit'
import { humanize } from '../../../utils/string'

import { updateCurrentSearchFieldData, deleteFieldFromCurrentSearch } from "../../../redux/actions"

const renderTextField = ({ input, newValue, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    value={newValue}
    {...input}
    {...custom}
  />
)

let LightBoxSearchQueryForm = props => {
  const renderMenuItems = (arr) => {
    var count=0
    return arr.map(val => {
      count++
      return (
        <MenuItem key={count} value={val} primaryText={humanize(val)} />
      )
    })
  }

  const renderSearchFields = (abilities, currentSearch, dispatch, change) => {
    let count = 1
    return Object.entries(abilities).map(ability => {
      if(ability[0] === "icon") {
        return null
      } else {
        count += 2
        if (currentSearch.fields.includes(ability[0])) {
          switch (ability[1].type) {
            case "string":
              if(ability[1].nested_action.search_type === 'fuzzy' || ability[1].nested_action.search_type === 'basic') {
                return (
                  <div className="text-field" key={count-2}>
                    <i className="icon-cancel-circled farther-form-tooltip-icon" onClick={() => dispatch(deleteFieldFromCurrentSearch(ability[0]))} />
                    <Field name={ability[0]} component={renderTextField} label={ability[1].logical} fullWidth={true}/>
                  </div>
                )
              } else if (ability[1].nested_action.select_from) {
                return (
                  <div className="text-field" key={count-2}>
                    <i className="icon-cancel-circled farther-form-tooltip-icon" onClick={() => dispatch(deleteFieldFromCurrentSearch(ability[0]))} />
                    <Field name={ability[0]} component={SelectField} hintText={ability[1].logical} fullWidth={true} floatingLabelText={ability[1].logical + "..."}>
                      {renderMenuItems(currentSearch.forSelects[ability[0]])}
                    </Field>
                  </div>
                )
              } else {
                return null
              }
            case "order":
              return (
                  <div className="text-field" key={count-2}>
                    <i className="icon-cancel-circled farther-form-tooltip-icon" onClick={() => dispatch(deleteFieldFromCurrentSearch(ability[0]))} />
                    <Field name={ability[0]} component={SelectField} hintText={ability[1].logical} fullWidth={true} floatingLabelText={ability[1].logical + "..."}>
                      {renderMenuItems(ability[1].nested_action.select_from)}
                    </Field>
                  </div>
                )
            case "boolean":
              return (
                <div style={{marginLeft: "14px", marginTop: "-25px", marginBottom: "14px"}} key={count-2}>
                  <i className="icon-cancel-circled farther-form-tooltip-icon" style={{marginTop: "24px", marginLeft: "-29px"}} onClick={() => dispatch(deleteFieldFromCurrentSearch(ability[0]))} />
                  <br/>
                  <Field name={ability[0]} component={Checkbox} label={ability[1].logical} fullwidth={true}/>
                </div>
              )
            case "date":
              return (
                <div style={{marginLeft: "16px", marginTop: "20px"}} key={count-2}>
                  <i className="icon-cancel-circled farther-form-tooltip-icon" style={{marginTop: "55px"}} onClick={() => dispatch(deleteFieldFromCurrentSearch(ability[0]))} />
                  <p className="form-description">{`${ability[1].logical}:`}</p>
                  <div style={{marginLeft: "16px", marginTop: "-20px", marginBottom: "20px"}}>
                    <Field name={`daterange_${ability[0]}_start`} component={DatePicker} floatingLabelText="From Date..." autoOk={true}
                      minDate={new Date(currentSearch.forSelects[ability[0]].earliest)}
                      maxDate={new Date(currentSearch.forSelects[ability[0]].latest)}
                    />

                    <Field name={`daterange_${ability[0]}_end`} component={DatePicker} floatingLabelText="To Date..." autoOk={true}
                      minDate={new Date(currentSearch.forSelects[ability[0]].earliest)}
                      maxDate={new Date(currentSearch.forSelects[ability[0]].latest)}
                    />
                  </div>
                </div>
              )
            case "hidden": case "params":
              return (
                <div key={count-2} className="text-field">
                  <i className="icon-cancel-circled farther-form-tooltip-icon" style={{marginTop: "0px"}} onClick={() => dispatch(deleteFieldFromCurrentSearch(ability[0]))} />
                  {ability[1].logical + "..."}
                </div>
              )
            default:
              return null
          }
        } else {
          return (
            <div
              key={count-1}
              onClick={() => dispatch(updateCurrentSearchFieldData(currentSearch.model, ability[0], ability[1].type, ability[1].nested_action, change))}
              title={ability[1].logical}
              className="button almost-full-width-button"
            >
              <i className={"icon-" + ability[1].icon}/>{ability[1].logical}
            </div>
          )
        }
      }
    })
  }

  const { handleSubmit, pristine, submitting, errorContent, searchAbility, currentSearch, dispatch, change } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <ReactTooltip />
      <ErrorBlock content={errorContent} />
      <ReactCSSTransitionGroup transitionName="group-fade-wait" transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        {renderSearchFields(searchAbility[currentSearch.model], currentSearch, dispatch, change)}
        <div key={0} className="form-button centered">
          <button type="submit" className="button centered" disabled={pristine || submitting}>Submit your search for {humanize(currentSearch.model)}</button>
        </div>
      </ReactCSSTransitionGroup>
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
