import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Welcome!" />
          <h1>Thank you for your subscription</h1>
          <p>You'll receive an email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success
