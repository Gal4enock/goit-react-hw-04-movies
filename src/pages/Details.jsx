import React from 'react';

const Details = function ({match}) {
  return (
    <div>
      <h1>Movie's details { match.params.movieId}</h1>
      <img src="/" alt=""/>
    </div>
  )
}

export default Details;