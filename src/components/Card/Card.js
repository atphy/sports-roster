import React from 'react';

import cardShape from '../../helpers/props/cardShape';

class Card extends React.Component {
    static propTypes = {
      card: cardShape.cardShape,
    }

    render() {
      const { player } = this.props;

      return (
        <div className="card">
        <img className="card-img-top" src={player.imgUrl} alt="Player" />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.position}</p>
        </div>
      </div>
      );
    }
}

export default Card;
