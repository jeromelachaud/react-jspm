import React from 'react';
import {List} from './list';

export class FriendsList extends React.Component {
  render() {
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
    return (
      <List items={friends}/>
    );
  }
};
