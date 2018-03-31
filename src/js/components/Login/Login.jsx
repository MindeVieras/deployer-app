
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'

const styles = theme => ({
  root: {
    height: '100%'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    minWidth: '300px'
  }
})

class Login extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

  }

  render() {
    const { classes } = this.props

    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className={ classes.root }
      >
        <Grid item>
          <Paper elevation={ 4 } className={ classes.paper }>
            <TextField
              id="name"
              label="Name"
              value={'wedxa'}
              onChange={() => console.log('oon change')}
              margin="normal"
            />
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)
