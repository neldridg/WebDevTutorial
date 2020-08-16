import React, { Component } from 'react';
import '../styles/AboutComponent.scss'

interface AboutComponentProps {

}

export default class AboutComponent extends Component<AboutComponentProps> {
  constructor(props: AboutComponentProps) {
    super(props);
  }

  render() {
    return (
      <div>About Component</div>
    )
  }

}
