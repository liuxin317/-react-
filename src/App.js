import React, { Component } from 'react';
import { Button, Spin } from 'antd';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import A from './components/A';
import B from './components/B';

class App extends Component {
  state = {
    loading: false
  }

  render() {
    return (
      <Router>
        <Spin spinning={this.state.loading} tip="Loading..." size="large">
        <section className="box load-style">
            <Route exact path="/" component={ A } />
            <Route path="/a" component={ A } />
            <Route path="/b" component={ B } />

            <Link to={{pathname: "/a", state: "我是A"}}><Button>到A</Button></Link>
            <Link to={{pathname: "/b", state: "我是B"}} style={{ marginLeft: 10 }}><Button>到B</Button></Link>
        </section>
        </Spin>
      </Router>
    );
  }
}

export default App;
