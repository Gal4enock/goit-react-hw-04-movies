import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Home from '../../pages/Home';
// import Movies from '../../pages/Movies';
import Navigation from '../Navigation';
// import Details from '../../pages/Details';

import style from './App.module.css';


function App() {
  return (
    <div className={style.App}>
      <Navigation />
      <hr />
      <Suspense fallback={ <h1>Loading...</h1> }>
      <Switch>
        <Route path="/" exact component={lazy(() => import('../../pages/Home'/* webpackChunkName: "home-page" */))} />
        <Route path="/movies" exact component={lazy(() => import('../../pages/Movies'/* webpackChunkName: "movies-page" */))} />
        <Route path="/movies/:movieId" component={lazy(() => import('../../pages/Details'/* webpackChunkName: "details-page" */))}/>
        </Switch>
        </Suspense>
    </div>
  );
}

export default App;
