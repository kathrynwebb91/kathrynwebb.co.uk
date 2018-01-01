import React, { Component } from 'react';
import ContactIcon from './ContactIcon.jsx';
//import "dist/style.bundle.css";

export default class ContactBar extends Component {
  render() {
    return (
      <div className='ContactBar'>
        <ContactIcon type="LinkedIn"/>
        <ContactIcon type="Twitter"/>
      </div>
    );
  }
}