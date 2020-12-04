import React, { Component } from 'react';
import filmApi from '../servises/FilmsApi.js';

class Reviews extends Component {

  state = {
    reviews: [],
  }

  componentDidMount() {
    filmApi.fetchReviews(this.props.location.state.id).then(obj => {
      this.setState({
        reviews: obj.results
      })
    })
  }

  render() {
    console.log("state ",this.state.reviews);
   return(
     this.state.reviews.length > 0 ?
       <ul style={{ fontSize: 14 + "px", width: 820 + "px" }}>
       {this.state.reviews.map(review => {
         return <li key={review.id}>
           <h3>{review.author}</h3>
           <p>{review.content}</p>
         </li>
       })}
       </ul>
       : <p>No reviews have been found :(</p>
    )
  } 
}
  

export default Reviews