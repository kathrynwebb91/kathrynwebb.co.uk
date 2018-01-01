import React, { Component } from 'react'
import ReactSVG from 'react-svg'

import twitterImg from '../../../assets/twitter-icon.svg';
import linkedInImg from '../../../assets/linkedin-icon.svg';

var icons = {}

export default class ContactIcon extends Component {
  render() {
    icons = {
      Twitter: {
        img: twitterImg,
        url: "https://twitter.com/@KathrynLWebb"
      },
      LinkedIn: {
        img: linkedInImg,
        url: "http://www.linkedin.com/in/kathrynlwebb/"
      }
    }

    const iconClassName = this.props.type.toLowerCase() + "link";

    return (
      <a className="ContactIcon" href={icons[this.props.type].url} rel="me">
        {/* <img src={ icons[this.props.type] } alt='Twitter' /> */}
        <ReactSVG
          path={icons[this.props.type].img}
          callback={svg => console.log(svg)}
          className={this.props.type.toLowerCase()}
          wrapperClassName={iconClassName}
        />
      </a>
    );
  }
}