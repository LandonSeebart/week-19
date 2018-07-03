import React, { Component } from 'react';
import Card from './components/Card'

const ids = [
  '1',
  '2'
]

class App extends Component {
  state = {
    ids: []
  };

  showId = id => {
    const { ids } = this.state

    if (ids.includes(id)) {
      return
    }

    this.setState({
      ids: [...ids, id]
    });
  }

  render() {
    // const shuffledIds = _shuffle(ids)

    return (
      <div className="App">
        <div>{this.state.ids.join(',')}</div>
        {ids.map(id => (
          <Card
            key={id}
            id={id}
            onClick={this.showId}
          />
        ))}
      </div>
    );
  }
}

export default App;
