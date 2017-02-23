import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './index.jsx';

export default class Demo extends Component {
  render(){
    return (
      <div>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
        <Button disabled>Disabled</Button>
        <br />

        <Button type="primary">Primary</Button>
        <Button type="danger">Danger</Button>
        <Button type="warning">Warning</Button>
        <Button type="success">Success</Button>
        <br />

        <Button>中文</Button>
        <Button>English</Button>
        <br />

        <Button size="small">Small</Button>
        <Button >Default</Button>
        <Button size="large">Large</Button>
        <br />

        <Button size="small" shape="cicle">1</Button>
        <Button shape="cicle">2</Button>
        <Button size="large" shape="cicle">3</Button>
        <br />

        {/*
          <Button ></Button>
        */}
      </div>
    )
  }
}
