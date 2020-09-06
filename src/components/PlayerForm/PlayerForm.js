import React from 'react';

import './PlayerForm.scss';

class PlayerForm extends React.Component {
  render() {
    return (
            <div className="player-form">
                <form>
                  <div className="form-group">
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" required />
                  </div>
                  <div className="form-group">
                     <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Position" required />
                  </div>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="coaster-image" required />
                    <label className="custom-file-label" for="coaster-image" id="coaster-image-label">Upload Player Image</label>
                  </div>
                </form>
            </div>
    );
  }
}

export default PlayerForm;
