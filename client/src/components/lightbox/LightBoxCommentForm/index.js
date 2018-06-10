import React from 'react'
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import { Field, reduxForm } from 'redux-form'

import { TextField } from 'redux-form-material-ui'
import ErrorBlock from 'containers/iterators/ErrorBlock'
import { submit, previewSubmit } from 'components/lightbox/LightBoxCommentForm/submit'

import MarkdownToolbar from 'components/MarkdownToolbar'

const validate = values => {
  const errors = {}
  const requiredFields = [
    'poster_name',
    'poster_email',
    'content'
  ]

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })

  if (values.poster_name && !/^[a-z ,.'-]+$/i.test(values.poster_name)) {
    errors.poster_name = 'Your name is invalid (please use letters and spaces)'
  }

  if (values.poster_email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.poster_email)) {
    errors.poster_email = 'Invalid email address'
  }

  if (values.content && values.content.length < 5) {
    errors.content = 'Your comment is too short, please make it longer than 4 characters.'
  }

  return errors
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

let LightBoxCommentForm = props => {
  const renderMDTB = () => {
    return (<MarkdownToolbar />)
  }

  const { handleSubmit, pristine, submitting, errorContent, currentUser } = props
  return (
    // key is for ReactCSSTransitionGroup
    <div key={2}>
      <ReactTooltip />
      <form>
        <div className="text-field">
          <Field name="poster_name" component={renderTextField} label="Name"/>
        </div>
        <div className="text-field">
          <Field name="poster_email" component={renderTextField} label="Email"/>
        </div>
        <div className="text-field">
          <Field name="poster_website" component={renderTextField} label="Website"/>
        </div>
        <div className="text-field">
          {renderMDTB()}
          <i className="icon-info form-tooltip-icon" data-tip="Your comment can be written in Markdown" />
          <Field name="content" component={renderTextField} label="Content" fullWidth={true} multiLine={true}/>
        </div>
        {currentUser.id &&
          <div className="display-none">
            <Field name="user_id" component={renderTextField} />
            <Field name="approved" component={renderTextField} />
          </div>
        }
        <div className="form-button margin-left-17">
          <button
            type="submit"
            style={{marginRight: "10px"}}
            className="button centered"
            disabled={pristine || submitting}
            onClick={handleSubmit(previewSubmit)}>
              Preview
          </button>
          <button
            type="submit"
            className="button centered"
            disabled={pristine || submitting}
            onClick={handleSubmit(submit)}>
              Post Comment
          </button>
        </div>
      </form>
      <ErrorBlock content={errorContent} />
    </div>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
LightBoxCommentForm = reduxForm({
  form: 'LightBoxNewCommentForm', // a unique identifier for this form
  validate
})(LightBoxCommentForm)

// You have to connect() to any reducers that you wish to connect to yourself
LightBoxCommentForm = connect(
  state => ({
    initialValues: {
      poster_name: state.currentUser.name,
      poster_email: state.currentUser.email,
      poster_website: (state.currentUser.id ? "https://thelocus.co" : null),
      user_id: state.currentUser.id,
      approved: (state.currentUser.id ? true : false),
      field_meta: {
        resource_plural: "comments",
        resource_type: "comment"
      }
    }
  })
)(LightBoxCommentForm)

export default LightBoxCommentForm
