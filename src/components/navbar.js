import React, { Component } from 'react';
import styles from './navbar.module.less';
// import request from './utils/request'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateTime: '',
      navList: [
          {id: 1, title: '极选'},
          {id: 2, title: '顶楼'},
          {id: 3, title: '图赏'},
          {id: 4, title: '指南'}
      ]
    };
  }
  componentDidMount() {
  }

  render() {
      const data = this.state;
    return (
      <div className={styles.Nav}>
        {
            data.navList.map((item, index) => {
                return (
                    <div key={index}>
                        <span>{ item.title }</span>
                    </div>
                )
            })
        }
      </div>
    );
  }
}

export default App;