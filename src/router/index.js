import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PreLoading from '../components/common/Preloading';
import loadable from 'react-loadable'; // 代码的拆分和懒加载

const loadableA = loadable({
  loader: () => import('../components/A'),
  loading: PreLoading
})

const loadableB = loadable({
  loader: () => import('../components/B'),
  loading: PreLoading
})

class ViewRoute extends Component {
  render () {
    return (
      <section>
        <Switch>
          <Route path="/" exact render={() => <Redirect to='/a' />}/>
          <Route path="/a" component={ loadableA } />
          <Route path="/b" component={ loadableB } />
        </Switch>
      </section>
    )
  }
}

export default ViewRoute;
