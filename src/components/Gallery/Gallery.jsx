import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';



const Gallery = ({arr}) => (
  <ul className="GalleryWrapper">
    {arr.map(el => {
      return (
        <li key={el.id}><Link to="/">{el.title}</Link></li>
      )
    })}
  </ul>
);

Gallery.propTypes = {
  arr: PropTypes.array.isRequired,
};



export default Gallery;
