import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import filmApi from '../servises/FilmsApi.js';

import Gallery from '../components/Gallery/Gallery';


class Movies extends Component {
  state = {
    query: '',
    films: []
  }
  
  componentDidMount() {
  
}

  render() {
    return (
      <div>
        <form>
          <input name="search" type="text" />
          <button type='submit'>Search</button>
        </form>
        {this.state.films.length > 0 &&
          <Gallery match={this.props.match.url} arr={this.state.films}/>
        //   <ul>
        //   {this.state.films.map(film => <li key={film.id}> <Link to={`${this.props.match.url}/${film.id}`}>{film.title}</Link> </li> )}
        // </ul>
        }
      </div>
    )
  }
} 

export default Movies