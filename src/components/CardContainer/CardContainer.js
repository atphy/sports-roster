import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

import './CardContainer.scss';

import playersData from '../../helpers/data/playersData';
import Card from '../Card/Card';
import PlayerForm from '../PlayerForm/PlayerForm';

class CardContainer extends React.Component {
state = {
  players: [],
  formOpen: false,
}

static propTypes = {
  authed: PropTypes.bool.isRequired,
}

getPlayers = () => {
  playersData.getPlayersByUid(authData.getUid())
    .then((players) => this.setState({ players }))
    .catch((err) => console.error('get players broke', err));
}

componentDidMount() {
  this.getPlayers();
}

    logoutClick = (e) => {
      firebase.auth().signOut();
    }

    deletePlayer = (playerId) => {
      playersData.deletePlayer(playerId)
        .then(() => {
          this.getPlayers();
        })
        .catch((err) => console.error('delete failed', err));
    }

    createPlayer = (newPlayer) => {
      playersData.createPlayer(newPlayer)
        .then(() => {
          this.getPlayers();
          this.setState({ formOpen: false });
        })
        .catch((err) => console.error('create failed'));
    }

    render() {
      const { authed } = this.props;
      const { players, formOpen } = this.state;

      const playerCard = players.map((player) => <Card key={player.name} player={player} deletePlayer={this.deletePlayer} />);

      return (
          <div>
              <button className="open-form-button" onClick={() => { this.setState({ formOpen: !formOpen }); }}><i className="fas fa-plus-square"></i></button>
          <div className="card-container">
              {
                  authed
                    ? <button className="logout-button" onClick={this.logoutClick} >Log Out</button>
                    : ''
              }
              { formOpen ? <PlayerForm createPlayer={this.createPlayer}/> : '' }
              {playerCard}
          </div>
          </div>
      );
    }
}

export default CardContainer;
