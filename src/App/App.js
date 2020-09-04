import React from 'react';
import './App.scss';

import Auth from '../components/Auth';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h3 className="top-header">Who the puck are the</h3>
        <h1 className="title">Dayton Gems</h1>
        <Auth />
      </div>
    );
  }
}

export default App;
