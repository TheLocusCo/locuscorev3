import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'email', 'password' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
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

const LoginForm = props => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <form className="centered" onSubmit={handleSubmit}>
      <div>
        <Field name="email" component={renderTextField} label="Email"/>
      </div>
      <div>
        <Field name="password" type="password" component={renderTextField} label="Password"/>
      </div>
      <div style={{marginTop: '10px'}}>
        <button type="submit" className="button centered" disabled={pristine || submitting}>Sign in</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'LoginForm', // a unique identifier for this form
  validate,
})(LoginForm)
