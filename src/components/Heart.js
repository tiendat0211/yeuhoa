import React from 'react';
import HeartBase from '../utils/Heart';

export default class Heart extends React.Component {
  constructor(props) {
    super(props);
    this.width = props.width === 'auto' ? window.innerWidth : props.width;
    this.height = props.height === 'auto' ? window.innerHeight : props.height;
  }
  componentDidMount() {
    const heart = document.getElementById('heart');
    heart.replaceChildren(HeartBase(this.width, this.height).domElement);
  }
  render() {
    return <div id="heart" style={{width: this.width, height: this.height}}></div>;
  }
}
