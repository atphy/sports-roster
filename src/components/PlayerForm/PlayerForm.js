import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

import './PlayerForm.scss';

class PlayerForm extends React.Component {
    static propTypes = {
      createPlayer: PropTypes.func.isRequired,
    }

    state = {
      name: '',
      position: '',
      imageUrl: '',
    };

    changeNameEvent = (e) => {
      e.preventDefault();
      this.setState({ name: e.target.value });
    }

    changePositionEvent = (e) => {
      e.preventDefault();
      this.setState({ position: e.target.value });
    }

    changeImageEvent = (e) => {
      e.preventDefault();
      this.setState({ imageUrl: e.target.value });
    }

    addPlayerEvent = (e) => {
      e.preventDefault();

      const { name, position, imageUrl } = this.state;
      const { createPlayer } = this.props;
      const newPlayer = {
        name,
        position,
        imageUrl,
        uid: authData.getUid(),
      };
      createPlayer(newPlayer);
    }

    render() {
      return (
            <div className="player-form">
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" onChange={this.changeNameEvent} required />
                  </div>
                  <div className="form-group">
                     <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Position" onChange={this.changePositionEvent} required />
                  </div>
                  <div className="form-group">
                     <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Image URL" onChange={this.changeImageEvent} required />
                  </div>
                  <button className="btn btn-dark add-player-button" onClick={this.addPlayerEvent}>Add Player</button>
                </form>
            </div>
      );
    }
}

export default PlayerForm;
