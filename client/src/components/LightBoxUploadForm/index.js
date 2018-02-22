import React from 'react'
import ReactTooltip from 'react-tooltip'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import submit from './submit'

const customFileInput = (field) => {
  delete field.input.value // <-- just delete the value property
  return <input type="file" id="file" {...field.input} style={{marginLeft: "14px"}} />
}

let LightBoxUploadForm = props => {
  const humanize = (text) => {
    return (text.charAt(0).toUpperCase() + text.slice(1).replace(/_/gi, ' '))
  }

  const renderFields = (fieldMeta) => {
    var count = 0
    return Object.entries(fieldMeta).map(indivField => {
      count++
      switch (indivField[1]) {
        case "upload":
          return (
            <div className="form-field" key={count}>
              <i className={"icon-info upload-form-tooltip-icon " + (fieldMeta.tooltips[indivField[0]] ? "" : "display-none")} data-tip={fieldMeta.tooltips[indivField[0]]} />
              <br/>
              <p className="form-description">{humanize(indivField[0])}</p>
              <Field name={indivField[0]} type="file" component={customFileInput}/>
            </div>
          )
        default:
          return null
      }
    })
  }

  const { handleSubmit, pristine, submitting, field_meta } = props
  return (
    <div className="box-dark">
      <ReactTooltip />
      <h1 className="section-heading larger">Upload Content to this {humanize(field_meta.resource_type)}</h1>
      <form className="centered" onSubmit={handleSubmit(submit)}>
        {renderFields(field_meta)}
        <div className="form-button">
          <button type="submit" className="button centered" disabled={pristine || submitting}>Upload</button>
        </div>
      </form>
    </div>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
LightBoxUploadForm = reduxForm({
  form: 'LightBoxUploadForm', // a unique identifier for this form
  enableReinitialize: true
})(LightBoxUploadForm)

LightBoxUploadForm = connect(
  state => ({
    initialValues: state.uploadItem.content
  })
)(LightBoxUploadForm)

export default LightBoxUploadForm
