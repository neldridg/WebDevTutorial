import React, { Component } from 'react';
import '../styles/NavMenuComponent.scss'
import { Link } from 'react-router-dom';

interface NavMenuComponentProps {
}

interface NavMenuComponentState {
  shouldShowItems: boolean
}

export default class NavMenuComponent extends Component<NavMenuComponentProps, NavMenuComponentState> {

  constructor(props: NavMenuComponentProps) {
    super(props);
    this.state = {
      shouldShowItems: true
    };
    this.toggleItems = this.toggleItems.bind(this);
  }

  toggleItems() {
    this.setState({shouldShowItems: !this.state.shouldShowItems});
  }

  render() {
    return (
        <div>
          <nav className="nav-menu">
            <button className="close-button" onClick={() => this.toggleItems() }>☰</button>
            {
              this.state.shouldShowItems &&
              <ul className="nav-list">
                <li className="nav-list-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-list-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav-list-item">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="nav-list-item">
                  <Link to="/list">List</Link>
                </li>
              </ul>
            }
          </nav>
        </div>
    )
  }

}
