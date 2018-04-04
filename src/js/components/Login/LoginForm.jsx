
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

import renderText from '../Common/Form/renderText'
import SubmitButton from '../Common/Form/SubmitButton'
import { loginActions } from '../../actions'

const styles = theme => ({
  auth_error: {
    marginTop: theme.spacing.unit
  }
})

class LoginForm extends Component {
  constructor(props) {
    super(props)

    // reset login status
    props.dispatch(loginActions.logout())

  }

  render() {
    const { classes, handleSubmit, auth_loading, auth_error } = this.props

    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <Field
            name="email"
            component={ renderText }
            label="Email"
            type="email"
          />
        </div>
        <div>
          <Field
            name="password"
            component={ renderText }
            label="Password"
            type="password"
          />
        </div>

        <SubmitButton
          loading={ auth_loading }
        />

        {auth_error &&
          <Typography
            className={ classes.auth_error }
            align="center"
            color="error"
          >
            { auth_error }
          </Typography>
        }
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  const requiredFields = [
    'email',
    'password'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

function submit(values, dispatch, form) {
  const { email, password } = values
  dispatch(loginActions.login(email, password))
}

function mapStateToProps(state) {
  const { loading, error } = state.auth
  return {
    auth_loading: loading,
    auth_error: error
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  auth_loading: PropTypes.bool,
  auth_error: PropTypes.any
}

LoginForm.defaultProps = {
  auth_loading: false,
  auth_error: false
}

LoginForm = connect(mapStateToProps)(LoginForm)

export default reduxForm({
  form: 'login_form',
  onSubmit: submit,
  validate
})(withStyles(styles)(LoginForm))
