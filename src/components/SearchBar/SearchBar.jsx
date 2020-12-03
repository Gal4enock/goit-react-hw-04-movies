import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import filmApi from '../../servises/FilmsApi';

class SearchBar extends PureComponent { 
 

   state = {
      query: '',
  
  }

  handleChange = ({target}) => {
    this.setState({
      query: target.value
    })
  }

  handleSubmit = (e) =>  {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' })
    
    // filmApi.fetchSearch(this.state.query).then(arr => {
    //   console.log(arr);
    //  return (  this.setState({ films: arr ? arr : [] }) )
    // })
  }

  render () {
   
    return (
       <form onSubmit={this.handleSubmit}>
          <input value={this.state.query} onChange={this.handleChange} name="search" type="text" />
          <button  type='submit'>Search</button>
        </form>
    );
  }
}



export default SearchBar;
