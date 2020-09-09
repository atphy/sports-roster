import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

import './PlayerForm.scss';

class PlayerForm extends React.Component {
    static propTypes = {
      createPlayer: PropTypes.func.isRequired,
      editPlayer: PropTypes.object.isRequired,
      updatePlayer: PropTypes.func.isRequired,
    }

    state = {
      name: '',
      position: '',
      imageUrl: '',
      isEditing: false,
    };

    componentDidMount() {
      const { editPlayer } = this.props;
      if (editPlayer.name) {
        this.setState({
          name: editPlayer.name,
          postion: editPlayer.position,
          imageUrl: editPlayer.imageUrl,
          isEditing: true,
        });
      }
    }

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

    editPlayerEvent = (e) => {
      e.preventDefault();
      const { name, position, imageUrl } = this.state;
      const { updatePlayer, editPlayer } = this.props;
      const myUpdatedPlayer = {
        name,
        position,
        imageUrl,
        uid: authData.getUid(),
      };

      updatePlayer(editPlayer.id, myUpdatedPlayer);
    }

    render() {
      const {
        name, position, imageUrl, isEditing,
      } = this.state;
      return (
            <div className="player-form">
                <form>
                  <div className="form-group">
                    <input type="text" value={name} className="form-control" id="formGroupExampleInput" placeholder="Name" onChange={this.changeNameEvent} required />
                  </div>
                  <div className="form-group">
                     <input type="text" value={position} className="form-control" id="formGroupExampleInput2" placeholder="Position" onChange={this.changePositionEvent} required />
                  </div>
                  <div className="form-group">
                     <input type="text" value={imageUrl} className="form-control" id="formGroupExampleInput3" placeholder="Image URL" onChange={this.changeImageEvent} required />
                  </div>
                  {
                      isEditing
                        ? <button className="btn btn-dark add-player-button" onClick={this.editPlayerEvent}>Edit Player</button>
                        : <button className="btn btn-dark add-player-button" onClick={this.addPlayerEvent}>Add Player</button>
                  }
                </form>
            </div>
      );
    }
}

export default PlayerForm;
