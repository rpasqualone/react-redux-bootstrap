import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import '../assets/styles/App.scss';

import { history } from '../store';

import NotFound from '../components/NotFound';
import Main from '../containers/Main';

export default function () {
    return (
      <ConnectedRouter history={history}>
       <Switch>
         <Route exact path="/" component={Main} />
         <Route component={NotFound} />
       </Switch>
      </ConnectedRouter>
    );
}
