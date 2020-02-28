import React, { Component } from 'react';
import Home from './Home'
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Home />
      </div>
    );
  }
}

export default App;
