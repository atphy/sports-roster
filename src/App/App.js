import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import fbConnection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import CardContainer from '../components/CardContainer/CardContainer';

fbConnection();
class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    const loadComponent = () => {
      if (authed) {
        return <CardContainer authed={authed} />;
      }
      return <Auth />;
    };

    return (
      <div className="App">
        <h3 className="top-header">Who the puck are the</h3>
        <h1 className="title">Dayton Gems</h1>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
