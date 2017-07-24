import React, { Component } from 'react';
import { Button, Container, Header } from 'semantic-ui-react'

import logo from '../assets/logo.svg';
import '../assets/styles/App.scss';

import NavContainer from './Nav';

export default class Main extends Component {
  render() {
    console.log('test');
    return (
      <div className="App">
        <NavContainer />
        <Container>
          <Header as='h1'>Hello world!</Header>
          <Button
            content='Discover docs'
            href='http://react.semantic-ui.com'
            icon='github'
            labelPosition='left'
          />
        </Container>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get strted, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
