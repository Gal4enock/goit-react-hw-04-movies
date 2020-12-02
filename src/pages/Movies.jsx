import React, { Component, Route } from 'react';

import filmApi from '../servises/FilmsApi.js';
import Cast from './Cast';
import Reviews from './Reviews';
import Gallery from '../components/Gallery/Gallery';


class Movies extends Component {
  state = {
    query: '',
    films: []
  }
  

  handleChange = ({target}) => {
    this.setState({
      query: target.value
    })
  }

  handleSubmit = (e) =>  {
    e.preventDefault();
    console.log(this.state.query);
    filmApi.fetchSearch(this.state.query).then(arr => {
      console.log(arr);
     return (  this.setState({ films: arr ? arr : [] }) )
    })
  }

  render() {
    return (
      <div>
        <form>
          <input value={this.state.query} onChange={this.handleChange} name="search" type="text" />
          <button onClick={this.handleSubmit} type='submit'>Search</button>
        </form>
        {this.state.films.length > 0 &&
          <>
          <Gallery match={this.props.match.url} arr={this.state.films}/>
          {/* <Route path='/movies/:movieId' component={Cast} />
          <Route path='/movies/:movieId' component={Reviews} /> */}
          </>
        }
      </div>
    )
  }
} 

export default Movies