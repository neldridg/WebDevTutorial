import React, { Component } from 'react';
import '../styles/ContactComponent.scss'

interface ContactComponentProps {

}

export default class ContactComponent extends Component<ContactComponentProps> {
  constructor(props: ContactComponentProps) {
    super(props);
  }

  render() {
    return (
      <div>Contact Component</div>
    )
  }

}
