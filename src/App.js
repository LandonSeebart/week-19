import React, { Component } from 'react';
import Card from './components/Card'

class App extends Component {
  state = {
    cardIds: {},
    url: {}
  };

  showId = Card => {
    const cardIds = { ... this.state.id}
    cardIds = cardIds.push(this.id)
    this.setState ({
      cardIds
    });
  }

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
