import React from 'react';

import './Card.scss';

import cardShape from '../../helpers/props/cardShape';

class Card extends React.Component {
    static propTypes = {
      card: cardShape.cardShape,
    }

    render() {
      const { player } = this.props;

      return (
        <div className="card">
        <img className="card-image" src={player.imageUrl} alt="Player" />
        <div className="card-body">
          <h1 className="card-title">{player.name}</h1>
          <p className="card-text">Position: {player.position}</p>
        </div>
      </div>
      );
    }
}

export default Card;
