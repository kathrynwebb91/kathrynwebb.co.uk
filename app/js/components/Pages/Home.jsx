import React, { Component } from 'react';
import ContactBar from '../Global/ContactBar.jsx'
import NameLogo from '../Global/NameLogo.jsx'

export default class Home extends Component {
  render() {
    return (
        <div className="Home page">
            <div className="Nav">
                <NameLogo />
                <ContactBar />
            </div>
        </div>
    );
  }
}