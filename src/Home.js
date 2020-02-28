import React, { Component } from 'react';
import Navbar from './components/navbar';
// import request from './utils/request'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateTime: '',
      info: []
    };
  }
  componentDidMount() {
  }

  render() {
    return (
      <div  style={{height: 600, overflow: 'hidden'}}>
          <Navbar />
        <div>
            
        </div>
      </div>
    );
  }
}

export default App;