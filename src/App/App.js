import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h3 className="top-header">Who the puck are the</h3>
        <h1 className="title">Dayton Gems</h1>
        <h2 className="sub-header hidden">1964-1980</h2>
        <button className="login-button">Log In</button>
        <img className="hidden" src="https://i.imgur.com/g2rCa5I.png"></img>
      </div>
    );
  }
}

export default App;
