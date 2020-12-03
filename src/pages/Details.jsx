import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import filmApi from '../servises/FilmsApi.js';
import Card from '../components/Card';

import Cast from './Cast';
import Reviews from './Reviews';

class Details extends Component {

  state = {
    movie: null,
    image: ""
  }

  async componentDidMount() {
    const movie = await filmApi.fetchMovie(this.props.match.params.movieId);
    console.log("movie ",movie);
    const image = await filmApi.getImage(movie.backdrop_path);
    console.log("image.d ",image);

    this.setState({
      movie,
      image: image.url
    })
  }

 
  handleGoBack = () => {
    
    const { location, history } = this.props
    
    if (location.state && location.state.from) {
      return history.push(location.state.from)
    }
    this.props.history.push("/movies")
}

  render() {

    const { movie, image } = this.state;
    const {match} = this.props
    return (
      <>
        <button onClick={this.handleGoBack} type="button"> Back to movies </button>
        {movie ? <Card obj={movie} img={image} /> : ''}
        
        <Link to={{
          pathname: `${match.url}/cast`,
          state: {id: this.state.movie ? this.state.movie.id : ''}
        }}> Cast </Link>
        <br/>
        <Link to={{
          pathname: `${match.url}/reviews`,
          state: {id: this.state.movie ? this.state.movie.id : ''}
        }}> Reviews </Link>
        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </>
    )
  }
}

export default Details;