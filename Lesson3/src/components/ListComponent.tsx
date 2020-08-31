import React, { Component } from 'react';
import '../styles/ListComponent.scss';

interface ListComponentProps {
  title: string,
  altText: string,
  maxItems: Number,
  imageLink: string,
}

export default class ListComponent extends Component<ListComponentProps> {
  constructor(props: ListComponentProps) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.title }
        <img src={this.props.imageLink} alt={this.props.altText} width="500" height="500"></img>
        <ul>
          <li></li>
        </ul>
      </div>
    )
  }

}
