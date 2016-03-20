import React from 'react';
import {Component} from './components/component';
import {FriendsList} from './components/friends-list';


export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Component />
        <FriendsList />
      </div>
    );
  }
}
