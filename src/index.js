// React
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Components/Pages
import App from './components/App';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';

// Reducer
import reducer from './reducer';

// Store
const store = createStore(reducer, applyMiddleware(thunk, logger));

// Browser History
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

render((
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/profile' component={UserProfile}/>
        </Switch>
      </App>
    </Router>
  </Provider>
), 
document.getElementById('root')
);