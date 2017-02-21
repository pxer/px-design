import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './index.jsx';

export default class Demo extends Component {
  render(){
    return (
      <div>
        <Button type="primary" className="lg">Primary</Button>
        <Button className="px-btn-default">Default</Button>
        <Button >Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>
    )
  }
}
