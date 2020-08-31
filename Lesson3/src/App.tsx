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
import ListComponent from './components/ListComponent';

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
            <AboutComponent />
          </Route>
          <Route path="/contact">
            <ContactComponent />
          </Route>
          <Route path="/list">
            <ListComponent maxItems={4} altText={'Sample alt-text'} title={'Example Title'} imageLink={'https://i.redd.it/8i7frhmtdlh51.jpg'}/>
          </Route>
          <Route path="/" >
            <HomeComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}
