import React, { Component } from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';
import { Button } from 'antd';
import HttpRequest from './utils/fetch';
import ViewRoute from './router';
import Loading from './components/common/Loading';

class App extends Component {
  componentDidMount () {
    HttpRequest("/code/query", "GET", {
      phone: "18200110585"
    })
  }

  render() {
    return (
      <Router>
        <section className="box">
          <Loading />
          <ViewRoute />
          <Link to={{pathname: "/a", state: "我是A"}}><Button>到A</Button></Link>
          <Link to={{pathname: "/b", state: "我是B"}} style={{ margin: "0 10px" }}><Button>到B</Button></Link>
        </section>
      </Router>
    )
  }
}

// const mapStateToProps = (store) => {
//   return {
//     loading: store.common.loading
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     hideLoadClick: () => { dispatch({ type: name.LOAD_STATE, payload: { loading: false } }) }
//   }
// }

// const ConnectApp = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)

export default App;
