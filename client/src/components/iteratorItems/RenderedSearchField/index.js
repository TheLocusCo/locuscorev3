import React from 'react'
import { Field } from 'redux-form'
import { animated } from 'react-spring'
import MenuItem from 'material-ui/MenuItem'
import { TextField, Checkbox, SelectField, DatePicker } from 'redux-form-material-ui'

import './style.css'
import { humanize } from 'utils/string'
import { deleteFieldFromCurrentSearch } from 'redux/actions'

const renderTextField = ({ input, newValue, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    value={newValue}
    {...input}
    {...custom}
  />
)

let RenderedSearchField = props => {
  const renderMenuItems = (arr) => {
    var count=0
    return arr.map(val => {
      count++
      return (
        <MenuItem key={count} value={val} primaryText={humanize(val)} />
      )
    })
  }

  const { ability, currentSearch, dispatch, index, styles } = props

  switch (ability[1].type) {
    case "string":
      if(ability[1].nested_action.search_type === 'fuzzy' || ability[1].nested_action.search_type === 'basic') {
        return (
          <animated.div style={styles} className="text-field" key={index-1}>
            <i className="icon-cancel-circled farther-form-tooltip-icon" onClick={() => dispatch(deleteFieldFromCurrentSearch(ability[0]))} />
            <Field name={ability[0]} component={renderTextField} label={ability[1].logical} fullWidth={true}/>
          </animated.div>
        )
      } else if (ability[1].nested_action.select_from) {
        return (
          <animated.div style={styles} className="text-field" key={index-1}>
            <i className="icon-cancel-circled farther-form-tooltip-icon" onClick={() => dispatch(deleteFieldFromCurrentSearch(ability[0]))} />
            <Field name={ability[0]} component={SelectField} hintText={ability[1].logical} fullWidth={true} floatingLabelText={ability[1].logical + "..."}>
              {renderMenuItems(currentSearch.forSelects[ability[0]])}
            </Field>
          </animated.div>
        )
      } else {
        return null
      }
    case "order":
      return (
          <animated.div style={styles} className="text-field" key={index-1}>
            <i className="icon-cancel-circled farther-form-tooltip-icon" onClick={() => dispatch(deleteFieldFromCurrentSearch(ability[0]))} />
            <Field name={ability[0]} component={SelectField} hintText={ability[1].logical} fullWidth={true} floatingLabelText={ability[1].logical + "..."}>
              {renderMenuItems(ability[1].nested_action.select_from)}
            </Field>
          </animated.div>
        )
    case "boolean":
      return (
        <animated.div style={styles} className='search-boolean-field' key={index-1}>
          <i className="icon-cancel-circled farther-form-tooltip-icon" style={{marginTop: "24px", marginLeft: "-29px"}} onClick={() => dispatch(deleteFieldFromCurrentSearch(ability[0]))} />
          <br/>
          <Field name={ability[0]} component={Checkbox} label={ability[1].logical} fullwidth={true}/>
        </animated.div>
      )
    case "date":
      return (
        <animated.div style={styles} className='search-date-field' key={index-1}>
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
        </animated.div>
      )
    case "hidden": case "params":
      return (
        <animated.div style={styles} key={index-1} className="text-field">
          <i className="icon-cancel-circled farther-form-tooltip-icon" style={{marginTop: "0px"}} onClick={() => dispatch(deleteFieldFromCurrentSearch(ability[0]))} />
          {ability[1].logical + "..."}
        </animated.div>
      )
    default:
      return null
  }
}

export default RenderedSearchField
