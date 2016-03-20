import React from 'react';

export class List extends React.Component {
  render() {
    var ListItems = this.props.items.map(function(item, i){
      return <li key={i}>{item}</li>;
    });

    return (
      <div>
        <ul>{ListItems}</ul>
      </div>
    )
  }
};
