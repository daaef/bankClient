import React, { Component } from 'react';
import './App.css';
import BankLists from './components/BankLists';

class App extends Component {
  render() {
    return (
      <div className="Anclose">

          <div className="uk-card uk-text-center uk-text-uppercase uk-background-secondary uk-card-default uk-card-body uk-blend-color-dodge">Welcome To Savannah Bank!</div>
        <BankLists/>

      </div>
    );
  }
}

export default App;
