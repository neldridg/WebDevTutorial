import React, { Component } from 'react';
import '../styles/HomeComponent.scss'

interface HomeComponentProps {

}

export default class HomeComponent extends Component<HomeComponentProps> {
  constructor(props: HomeComponentProps) {
    super(props);
  }

  render() {
    return (
      <div>Home Component</div>
    )
  }

}
