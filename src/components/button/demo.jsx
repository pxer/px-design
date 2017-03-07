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

        <Button><span>中文</span></Button>
        <Button>English</Button>
        <br />

        <Button size="small">Small</Button>
        <Button >Default</Button>
        <Button size="large">Large</Button>
        <br />

        <Button shape="circle" size="small">1</Button>
        <Button shape="circle">2</Button>
        <Button shape="circle" size="large">3</Button>
        <br />

        <Button.Group size="small">
          <Button>small</Button>
          <Button>button</Button>
          <Button>group</Button>
        </Button.Group>
        <br />

        <Button.Group size="large">
          <Button>large</Button>
          <Button>button</Button>
          <Button>group</Button>
        </Button.Group>
      </div>
    )
  }
}
