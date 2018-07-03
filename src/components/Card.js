import React from 'react';

const styles = {
    container: {
      background: "#9a74db",
      width: 200,
      height: 200,
      margin: 20
    }
};

class Card extends React.Component {
  showId = () => {
    console.log(this.props.id);
  }
  

  render () {
    return (
    <div style={ styles.container }>
      <button onClick={this.showId}>Card</button>
    </div>
    )
  }
}

export default Card