import React, { Component } from 'react';
import fetchTrends from '../servises/FilmsApi.js'

class Home extends Component {
  state = {
    films: []

  }
  render(){
    const baseUrl = "https://developers.themoviedb.org/3/";
    const apiKey = 'e6ef81afed74ab1ee71e8c331ba25208';

const fetchTrends = () => {
  return fetch(`${baseUrl}trending/get-trending?api_key=${apiKey}`)
    .then(res => res.json())
    .then(arr => {
      this.setState({
      films: arr
      })
      console.log(arr);
  })
    }
    fetchTrends()
    return (<div>Hello </div> )
  }
}

export default Home;