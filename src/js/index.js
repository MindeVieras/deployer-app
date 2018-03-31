
import React from 'react'
import { render } from 'react-dom'
import { grey } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import App from './App'

const muiTheme = getMuiTheme({
    fontFamily: 'Roboto',
    palette: {
        textColor: grey
    },
    appBar: {
        height: 50
    }
})
 
const DeployerApp = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <App />
  </MuiThemeProvider>
);

render(<DeployerApp />, document.getElementById('root'))
