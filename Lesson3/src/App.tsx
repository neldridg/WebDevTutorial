import React, { Component } from 'react';
import './styles/App.scss';
import SampleComponent from "./components/SampleComponent";

interface AppProps {
  // Props go here
}

export default class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <SampleComponent />
      </div>
    )
  }
}
