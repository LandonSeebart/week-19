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
  handleClick = () => {
    this.props.onClick(this.props.id)
  }
  
  render () {
    return (
    <div style={ styles.container }>
      <button onClick={this.handleClick}>Card</button>
    </div>
    )
  }
}

export default Card