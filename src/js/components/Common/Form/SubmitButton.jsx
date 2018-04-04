
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

import CircleSpinner from '../Spinners/CircleSpinner'

const styles = theme => ({
  btn_wrapper: {
    position: 'relative',
    marginTop: theme.spacing.unit * 2
  }
})

const SubmitButton = ({ classes, loading }) => (
  <div className={ classes.btn_wrapper }>
    <Button
      type="submit"
      variant="raised"
      color="primary"
      fullWidth={ true }
      size="large"
    >
      Login
    </Button>
    {loading &&
      <CircleSpinner size={ 32 } />
    }
  </div>
)

SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool
}

SubmitButton.defaultProps = {
  loading: false
}

export default withStyles(styles)(SubmitButton)
