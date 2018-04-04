
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import CssBaseline from 'material-ui/CssBaseline'

import { store } from './helpers'
import App from './App'

const theme = createMuiTheme()
 
const DeployerApp = () => (
  <Provider store={ store }>
    <MuiThemeProvider theme={ theme }>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>
)

render(<DeployerApp />, document.getElementById('root'))
