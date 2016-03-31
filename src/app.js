import React from 'react';
import {Component} from './components/component';

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Component />
      </div>
    );
  }
}
