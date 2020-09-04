import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

import './CardContainer.scss';

import playersData from '../../helpers/data/playersData';
import Card from '../Card/Card';

class CardContainer extends React.Component {
state = {
  players: [],
}

static propTypes = {
  authed: PropTypes.bool.isRequired,
}

componentDidMount() {
  playersData.getPlayersByUid(authData.getUid())
    .then((players) => this.setState({ players }))
    .catch((err) => console.error('get players broke', err));
}

    logoutClick = (e) => {
      firebase.auth().signOut();
    }

    render() {
      const { authed } = this.props;
      const { players } = this.state;

      const playerCard = players.map((player) => <Card key={player.name} player={player} />);

      return (
          <div className="card-container">
              {
                  authed
                    ? <button className="logout-button" onClick={this.logoutClick} >Log Out</button>
                    : ''
              }
              {playerCard}
          </div>
      );
    }
}

export default CardContainer;
