import React, {Component} from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return(
      <div className="hero">
        <h1>NBA Netflix</h1>
        <img src="https://safervpn-blog.s3.amazonaws.com/uploads/2014/06/Watch-Basketball-Online-NBA-Streaming-Anywhere.png" id="hero-image" />
      </div>
    )
  }
}

export default Hero;