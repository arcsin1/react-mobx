import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { Router, Route, IndexRoute,hashHistory,browserHistory} from 'react-router';
import App from './app'
import Home from "../components/Home"
import Log from "../components/Log"
import data from "../components/data"
import stores from '../stores'

export default class Root extends Component {
  render() {
    return(
        <Provider {...stores}>
          <Router history={ browserHistory }>
              <Route path="/" component={ App } >
                    <Route path="home" component={ Home } />
                    <Route path="log" component={ Log } />
                    <Route path="data" component={ data } />
             </Route>
          </Router>
        </Provider>
    )
  }
};
