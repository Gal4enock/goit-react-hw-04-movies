import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import style from './Gallery.module.css';



const Gallery = ({arr, match, location}) => (
  <ul className={style.GalleryWrapper}>
    {arr.map(film => {
      return (
        <li className={style.List} key={film.id}>
          
          <Link className={style.Link} to={{
          pathname: `${match}/${film.id}`,
          state: {from: location}
          }}>
            <img className={style.Picture} width='250px' height='200px' src={film.backdrop_path ? `https://image.tmdb.org/t/p/w400${film.backdrop_path}` : 'https://www.meme-arsenal.com/memes/334dedec90ef3de6cbef0f22e597798e.jpg'} alt=""/>
            {film.title}
          </Link>
        </li>
      )
    })}
  </ul>
);

Gallery.propTypes = {
  arr: PropTypes.array.isRequired,
};



export default Gallery;
