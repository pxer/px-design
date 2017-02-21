import React, { Component } from 'react';
import './style/index.scss';

export default class Button extends Component {
  
  static props = {
    supportESDev: true
  }
  
  render(){
    return (
      <button>primary</button>
    );
  }
}