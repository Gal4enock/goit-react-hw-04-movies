import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import Navigation from '../Navigation';
import Details from '../../pages/Details';

import style from './App.module.css';


function App() {
  return (
    <div className={style.App}>
      <Navigation />
      <hr/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:movieId" component={Details}/>
      </Switch>
    </div>
  );
}

export default App;
