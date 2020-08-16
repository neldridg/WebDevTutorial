import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './styles/App.scss';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import NavMenuComponent from './components/NavMenuComponent';

interface AppProps {
  // Props go here
}

export default class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <Router>
        <NavMenuComponent />
        <Switch>
          <Route path="/about">
            <AboutComponent></AboutComponent>
          </Route>
          <Route path="/contact">
            <ContactComponent></ContactComponent>
          </Route>
          <Route path="/" >
            <HomeComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}
