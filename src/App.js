import React, { Component } from 'react';
import {Button} from "antd"
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="content">
        <h1>Learn React with AntD</h1>
        <Button>AntD Button</Button>
      </div>
    );
  }
}

export default App;
