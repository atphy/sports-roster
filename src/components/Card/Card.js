import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

import cardShape from '../../helpers/props/cardShape';

class Card extends React.Component {
    static propTypes = {
      card: cardShape.cardShape,
      deletePlayer: PropTypes.func.isRequired,
      editPlayer: PropTypes.func.isRequired,
    }

    deletePlayerEvent = (e) => {
      e.preventDefault();
      const { player, deletePlayer } = this.props;
      deletePlayer(player.id);
    };

    editPlayerEvent = (e) => {
      e.preventDefault();
      const { editPlayer, player } = this.props;
      editPlayer(player);
    }

    render() {
      const { player } = this.props;

      return (
        <div className="player">
        <img className="player-image" src={player.imageUrl} alt="Player" />
        <div className="player-body">
          <h1 className="player-title">{player.name}</h1>
          <p className="player-position">Position: {player.position}</p>
        </div>
        <button className="update-player-bttn" onClick={this.editPlayerEvent}><i className="fas fa-edit"></i></button>
        <button className="delete-player-bttn" onClick={this.deletePlayerEvent}><i className="fas fa-trash-alt"></i></button>
      </div>
      );
    }
}

export default Card;
