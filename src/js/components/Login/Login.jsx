
import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

import LoginForm from './LoginForm'

const styles = theme => ({
  root: {
    height: '100%'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    minWidth: `300px`,
    marginTop: `20%`
  }
})

const Login = ({ classes }) => (
  <Grid
    container
    justify="center"
    className={ classes.root }
  >
    <Grid item>
      <Paper elevation={ 10 } className={ classes.paper }>
        <LoginForm />
      </Paper>
    </Grid>
  </Grid>
)

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)
