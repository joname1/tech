import React, { Component } from 'react';
import { Tabs, Badge } from 'antd-mobile';
import styles from './App.css';

const tabs = [
  { title: <Badge>综合</Badge> },
  { title: <Badge>趋势</Badge> },
  { title: <Badge>查询</Badge> },
  { title: <Badge>地图</Badge> },
];

const TabExample = () => (
  <div style={{paddingBottom: 10}}>
    <Tabs tabs={tabs}
      initialPage={0}
      swipeable={false}
      prerenderingSiblingsNumber={0}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff'}}>
      <h1>111</h1>
      </div>

      <div style={{marginTop: 10, background: '#fff'}}>
      <h1>222</h1>
      </div>

      <div>
      <h1>333</h1>
      </div>

      <div>
      <h1>444</h1>
      </div>
    </Tabs>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <TabExample />
      </div>
    );
  }
}

export default App;
