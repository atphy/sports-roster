import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClick = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  render() {
    return (
        <div className="auth">
          <h2 className="sub-header hidden">1964-1980</h2>
          <button className="login-button" onClick={this.loginClick}>Log In</button>
          <img className="login-img" src="https://i.imgur.com/g2rCa5I.png" alt="dayton gems mascot"></img>
        </div>
    );
  }
}

export default Auth;
