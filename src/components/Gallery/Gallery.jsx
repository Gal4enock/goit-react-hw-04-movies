import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';



const Gallery = ({arr, match, location}) => (
  <ul className="GalleryWrapper">
    {arr.map(film => {
      return (
        <li key={film.id}><Link to={{
          pathname: `${match}/${film.id}`,
          state: {from: location}
        }}>{film.title}</Link></li>
      )
    })}
  </ul>
);

Gallery.propTypes = {
  arr: PropTypes.array.isRequired,
};



export default Gallery;
