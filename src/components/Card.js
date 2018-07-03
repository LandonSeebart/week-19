import React from 'react';

const styles = {
    container: {
      background: "#9a74db",
      width: 100
    }
};

class Card extends React.Component {
  render () {
    return (
    <div style={ styles.container }>
      <button>Card</button>
    </div>
    )
  }
}

export default Card