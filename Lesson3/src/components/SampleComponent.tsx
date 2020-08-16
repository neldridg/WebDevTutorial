import React, { Component } from 'react';
import '../styles/SampleComponent.scss'

interface SampleComponentProps {

}

export default class SampleComponent extends Component<SampleComponentProps> {
  constructor(props: SampleComponentProps) {
    super(props);
  }

  render() {
    return (
      <div>Sample Component</div>
    )
  }

}
