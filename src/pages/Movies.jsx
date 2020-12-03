import React, { Component } from 'react';
import queryString from 'query-string';

import filmApi from '../servises/FilmsApi.js';

import Gallery from '../components/Gallery/Gallery';
import SearchBar from '../components/SearchBar'


class Movies extends Component {
  state = {
    films: []
  }
  
  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      filmApi.fetchSearch(query).then(films => this.setState({ films }) )
    }
}

  componentDidUpdate(prevProps) {
    const {query: prevQuery} = queryString.parse(prevProps.location.search);
    const { query: nextQuery } = queryString.parse(this.props.location.search);
    if (prevQuery !== nextQuery) {
      filmApi.fetchSearch(nextQuery).then(films => this.setState({ films }) )
     }
    }
  

 
  hendleChangeQuery = query => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`
    })
  console.log(query);
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.hendleChangeQuery}/>
        
        {this.state.films.length > 0 &&
          <>
          <Gallery match={this.props.match.url} location={this.props.location} arr={this.state.films}/>
          
          </>
        }
      </div>
    )
  }
} 

export default Movies