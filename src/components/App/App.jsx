import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import Navigation from '../Navigation';
import Details from '../../pages/Details';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:movieId" component={Details}/>
      </Switch>
    </div>
  );
}

export default App;
