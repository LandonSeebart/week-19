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
        <Card  />
      </div>
    );
  }
}

export default App;
