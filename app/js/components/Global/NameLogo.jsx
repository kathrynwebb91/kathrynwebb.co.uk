import React, { Component } from 'react'
import logo from '../../../assets/logo.png'

export default class NameLogo extends Component {
  render() {
    return (
      <div className='NameLogo'>
        <img src={logo} atlText="Kathryn L Webb"/>
      </div>
    );
  }
}