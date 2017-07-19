import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from '../pages/Splash';
import Avatar from '../pages/Avatar';
import Question from './Question';
import Success from './Success';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Splash}/>
      <Route path='/avatar' component={Avatar}/>      
      <Route path='/question' component={Question}/>
      <Route path='/success' component={Success}/>
    </Switch>
  </main>
);

export default Main;