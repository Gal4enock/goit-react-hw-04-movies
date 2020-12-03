import React, { Component } from 'react';
import filmApi from '../servises/FilmsApi.js';

import Gallery from '../components/Gallery/Gallery';


class Home extends Component {

  state = {
    films: []
  }

  componentDidMount() {
    const filmList = filmApi.fetchTrends();
    filmList.then(arr => {
      this.setState({
        films: arr
      })
    })
  }
  
  
  render(){
    console.log(this.state.films);
   
    return (<div>
      <h1>Trending today:</h1>
      {
        <Gallery match={`${this.props.match.url}movies`} location={this.props.location}
          arr={this.state.films} />
    } </div>)
  }
}

export default Home;