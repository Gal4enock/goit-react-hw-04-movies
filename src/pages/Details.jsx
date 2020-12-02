import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import filmApi from '../servises/FilmsApi.js';
import Card from '../components/Card';

class Details extends Component {

  state = {
    movie: null
  }

  componentDidMount() {
    filmApi.fetchMovie(this.props.match.params.movieId).then(obj => {
      this.setState({
        movie: obj
      })
    })
  }

  componentDidUpdate() {
    filmApi.getImage(this.props.match.params.movieId, this.state.movie.backdrop_path).then(console.log)
  }

  render() {
    console.log(this.state.movie);
    const { movie } = this.state;
    return (
      <>
        {movie ? <Card obj={movie} /> : ''}
        {movie ? <p>jsfhjdsfh</p> : ''}
      </>
    )
  }
}

export default Details;