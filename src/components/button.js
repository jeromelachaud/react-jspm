import React from 'react';

export class Button extends React.Component {
  getState() {
    return {
      counter: 1
    };
  };

  setState() {
    return {
      counter: this.getState().counter+1
    }
  }

  HandleClick() {
    return this.getState().counter+1;
  };

  render() {
    const appState = this.getState();
    return (
      <button>{appState.counter}</button>
    );
  }
};
