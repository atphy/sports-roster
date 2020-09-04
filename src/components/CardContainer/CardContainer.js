import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';

import './CardContainer.scss';

class CardContainer extends React.Component {
static propTypes = {
  authed: PropTypes.bool.isRequired,
}

    logoutClick = (e) => {
      firebase.auth().signOut();
    }

    render() {
      const { authed } = this.props;

      return (
          <div className="card-container">
              {
                  authed
                    ? <button className="logout-button" onClick={this.logoutClick} >Log Out</button>
                    : ''
              }
          </div>
      );
    }
}

export default CardContainer;
