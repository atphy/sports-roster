import React from 'react';
import './Auth.scss';

class Auth extends React.Component {
  render() {
    return (
        <div className="auth">
          <h2 className="sub-header hidden">1964-1980</h2>
          <button className="login-button">Log In</button>
          <img className="login-img" src="https://i.imgur.com/g2rCa5I.png"></img>
        </div>
    );
  }
}

export default Auth;
