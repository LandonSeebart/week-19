import React, { Component } from 'react';
import Card from './components/Card'

class App extends Component {
  state = {
    id: {},
    url: {}
  };

  render() {
    return (
      <div className="App">
        <Card id="1" />
        <Card id="2" />
      </div>
    );
  }
}

export default App;
