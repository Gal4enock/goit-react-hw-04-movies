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
   
    return (<div>{
      <Gallery match={this.props.match.url} arr={this.state.films}/>
    } </div>)
  }
}

export default Home;