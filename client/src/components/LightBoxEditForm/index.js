import React from 'react'
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import { Field, reduxForm } from 'redux-form'

import MenuItem from 'material-ui/MenuItem'
import { TextField, Checkbox, SelectField, DatePicker } from 'redux-form-material-ui'
import AuthedContentFooter from "../../containers/AuthedContentFooter"
import ErrorBlock from '../../containers/ErrorBlock'
import submit from './submit'

import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css'

import MarkdownToolbar from '../MarkdownToolbar'

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

let ListItem = ({ item }) => (
  <span>
    <strong>{item.name}</strong>
  </span>
)

const handleCreate = (name, id, meta, changeFunc, input) => {
  let newOption = {
    name: name
  }

  meta.dispatch(changeFunc(meta.form, 'categories', input.value.push(newOption)));
  return (null)
}

const renderMultiselectWithoutChange = ({ input, valueField, textField, id, meta, data }) => (
  <Multiselect
    {...input}
    onBlur={() => input.onBlur()}
    data={data}
    value={input.value || []} // requires value to be an array
    valueField={valueField}
    textField={textField}
    itemComponent={ListItem}
  />
)

const renderMultiselect = ({ input, valueField, textField, id, meta, changeFunc, data }) => (
  <Multiselect
    {...input}
    onBlur={() => input.onBlur()}
    data={data}
    value={input.value || []} // requires value to be an array
    valueField={valueField}
    textField={textField}
    itemComponent={ListItem}
    onCreate={(name) => handleCreate(name, id, meta, changeFunc, input)}
  />
)

let LightBoxEditForm = props => {
  const humanize = (text) => {
    return (text.charAt(0).toUpperCase() + text.slice(1).replace(/_/gi, ' '))
  }

  const renderMDTB = () => {
    return (<MarkdownToolbar />)
  }

  const renderMenuItems = (arr) => {
    var count=0
    return arr.map(val => {
      count++
      return (
        <MenuItem key={count} value={val} primaryText={humanize(val)} />
      )
    })
  }

  const renderMultiselectMenuItems = (arr) => {
    var count=0
    return arr.map(obj => {
      count++
      return (
        <MenuItem key={count} value={obj.value} primaryText={humanize(obj.name)} />
      )
    })
  }

  const renderCommentableSelectMenuItems = (arr) => {
    var count=0
    return arr.map(obj => {
      count++
      return (
        <MenuItem key={count} value={obj} primaryText={humanize(obj.name)} />
      )
    })
  }

  const ownerRenderer = (owner) => {
    return ownerSelectionRenderer(owner)
  }

  const ownerSelectionRenderer = (value) => {
    if("name" in value) {
      return value.name
    } else {
      return value.title
    }
  }

  const renderFields = (fieldMeta, id, change, categories, media, props) => {
    var count = 0
    return Object.entries(fieldMeta).map(indivField => {
      count++
      switch (indivField[1]) {
        case "string": case "text": case "integer": case "prawn":
          return (
            <div className="text-field" key={count}>
              <i className={"icon-info form-tooltip-icon " + (fieldMeta.tooltips[indivField[0]] ? "" : "display-none")} data-tip={fieldMeta.tooltips[indivField[0]]} />
              <Field name={indivField[0]} component={renderTextField} label={humanize(indivField[0])} fullWidth={true} multiLine={true} floatingLabelStyle={{marginLeft: "-50%"}}/>
            </div>
          )
        case "disabled":
          return (
            <div className="text-field" key={count}>
              <i className={"icon-info form-tooltip-icon " + (fieldMeta.tooltips[indivField[0]] ? "" : "display-none")} data-tip={fieldMeta.tooltips[indivField[0]]} />
              <Field name={indivField[0]} component={renderTextField} label={humanize(indivField[0])} disabled={true} fullWidth={true} multiLine={true} floatingLabelStyle={{marginLeft: "-50%"}}/>
            </div>
          )
        case "html":
          return (
            <div className="text-field" key={count}>
              {renderMDTB()}
              <i className={"icon-info form-tooltip-icon " + (fieldMeta.tooltips[indivField[0]] ? "" : "display-none")} data-tip={fieldMeta.tooltips[indivField[0]]} />
              <Field name={indivField[0]} component={renderTextField} label={humanize(indivField[0])} fullWidth={true} multiLine={true} floatingLabelStyle={{marginLeft: "-50%"}}/>
            </div>
          )
        case "boolean":
          return (
            <div className="boolean-field" key={count}>
              <i className={"icon-info boolean-form-tooltip-icon " + (fieldMeta.tooltips[indivField[0]] ? "" : "display-none")} data-tip={fieldMeta.tooltips[indivField[0]]} />
              <br/>
              <Field name={indivField[0]} component={Checkbox} label={humanize(indivField[0])} style={{width: "30%", marginLeft: "2%"}} labelStyle={{width: "100%", textAlign: "left"}}/>
            </div>
          )
        case "datetime":
          return (
            <div className="form-field" key={count}>
              <i className={"icon-info form-tooltip-icon " + (fieldMeta.tooltips[indivField[0]] ? "" : "display-none")} data-tip={fieldMeta.tooltips[indivField[0]]} />
              <br/>
              <p className="form-description">{humanize(indivField[0])}</p>
              <Field name={indivField[0]} component={DatePicker}/>
            </div>
          )
        case "categories":
          return (
            <div className="text-field" key={count}>
              <i className={"icon-info form-tooltip-icon " + (fieldMeta.tooltips[indivField[0]] ? "" : "display-none")} data-tip={fieldMeta.tooltips[indivField[0]]} />
              <br/>
              <p className="form-description">{humanize(indivField[0])}</p>
              <Field name={`${indivField[0]}_attributes`} component={renderMultiselect} valueField='id' textField='name' id={id} changeFunc={change} data={categories}/>
            </div>
          )
        case "commentable_select":
          return (
            <div className="commentable-form-field" key={count}>
              <i className={"icon-info form-tooltip-icon " + (fieldMeta.tooltips[indivField[0]] ? "" : "display-none")} data-tip={fieldMeta.tooltips[indivField[0]]} />
              <br/>
              <Field style={{marginLeft: "-70%"}} name={indivField[0]} component={SelectField} hintText={indivField[0]} floatingLabelText={humanize(indivField[0])} floatingLabelStyle={{marginLeft: "-50%"}} selectionRenderer={ownerSelectionRenderer}>
                {renderCommentableSelectMenuItems(fieldMeta.select[indivField[0]])}
              </Field>
              <div style={{marginTop: "-38px"}}><p>Initial Owner is: {ownerRenderer(props.owner)}</p></div>
            </div>
          )
        case "multiselect":
          return (
            <div className="form-field" key={count}>
              <i className={"icon-info form-tooltip-icon " + (fieldMeta.tooltips[indivField[0]] ? "" : "display-none")} data-tip={fieldMeta.tooltips[indivField[0]]} />
              <br/>
              <Field name={indivField[0]} component={SelectField} hintText={indivField[0]} multiple={true} floatingLabelText={humanize(indivField[0])} floatingLabelStyle={{marginLeft: "-50%"}}>
                {renderMultiselectMenuItems(fieldMeta.select[indivField[0]])}
              </Field>
            </div>
          )
        case "select":
          return (
            <div className="form-field" key={count}>
              <i className={"icon-info form-tooltip-icon " + (fieldMeta.tooltips[indivField[0]] ? "" : "display-none")} data-tip={fieldMeta.tooltips[indivField[0]]} />
              <br/>
              <Field name={indivField[0]} component={SelectField} hintText={indivField[0]} floatingLabelText={humanize(indivField[0])} floatingLabelStyle={{marginLeft: "-50%"}}>
                {renderMenuItems(fieldMeta.select[indivField[0]])}
              </Field>
            </div>
          )
        case "hidden":
          return Object.entries(fieldMeta.hidden).map(hiddenField => {
            switch (hiddenField[1]) {
              case "currentUser":
                return (
                  <div className="display-none" key={count}>
                    <Field name={hiddenField[0]} component={renderTextField} />
                  </div>
                )
              default:
                return null
            }
          })
        case "media":
          if (indivField[0] === "resource_plural") {
            return null
          } else {
            return (
              <div className="text-field" key={count}>
                <i className={"icon-info form-tooltip-icon " + (fieldMeta.tooltips[indivField[0]] ? "" : "display-none")} data-tip={fieldMeta.tooltips[indivField[0]]} />
                <br/>
                <p className="form-description">{humanize(indivField[0])}</p>
                <Field name={`${indivField[0]}_attributes`} component={renderMultiselectWithoutChange} valueField='id' textField='name' id={id} data={media}/>
              </div>
            )
          }
        default:
          return null
      }
    })
  }

  const { handleSubmit, pristine, submitting, field_meta, meta_title, location, errorContent, id, change, categories, media } = props
  return (
    <article className="portfolio-item">
      <ReactTooltip />
      <h1 className="section-heading larger">Editing {humanize(field_meta.resource_type)} "{meta_title}"</h1>
      {"owned_by" in props &&
        <h4 className="section-heading">Owned By {humanize(props.commentable_type)}: {props.owned_by}</h4>
      }
      <form className="centered" onSubmit={handleSubmit(submit)}>
        {renderFields(field_meta, id, change, categories, media, props)}
        <div className="form-button">
          <button type="submit" className="button centered" disabled={pristine || submitting}>Submit Changes</button>
        </div>
      </form>
      <ErrorBlock content={errorContent} />
      <AuthedContentFooter location={location} />
    </article>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
LightBoxEditForm = reduxForm({
  form: 'LightBoxEditForm' // a unique identifier for this form
})(LightBoxEditForm)

// You have to connect() to any reducers that you wish to connect to yourself
LightBoxEditForm = connect(
  state => ({
    initialValues: Object.assign({user_id: state.currentUser.id, author_id: state.currentUser.id}, state.editItem.content) // pull initial values from content
  })
)(LightBoxEditForm)

export default LightBoxEditForm
