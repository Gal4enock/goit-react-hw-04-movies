import React, { Component } from 'react';
import fetchTrends from '../servises/FilmsApi.js';

import Gallery from '../components/Gallery/Gallery';


class Home extends Component {

  state = {
    films: []
  }

  componentDidMount() {
    const filmList = fetchTrends();
    filmList.then(arr => {
      this.setState({
        films: arr
      })
    })
  }
  
  
  render(){
    console.log(this.state.films);
   
    return (<div>{
      <Gallery arr={this.state.films}/>
    } </div>)
  }
}

export default Home;