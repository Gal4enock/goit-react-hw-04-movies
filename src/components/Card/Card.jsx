import React from 'react';
import PropTypes from 'prop-types';

import style from './Card.module.css'


const Card = ({ obj }) => {
  const arr = obj.genres.map(el => el.name );
  console.log(arr);
  // console.log(obj.genres.map(el => {el.genres}));
  return (
    <div className={style.CardWrapper}>
      <div>
        <img src="https://www.meme-arsenal.com/memes/284d33c28e86f0e51215fd5c9131e37d.jpg" alt="" />
      </div>
      <div>
        <h2><span>{obj.title}</span>  ({obj.release_date.split("-")[0]})</h2>
        <p>User Score: wtf? </p>
        <h3>Overview</h3>
        <p className={style.OverviewBlock}>{obj.overview}</p>
        <h3>Genres</h3>
        <p className={style.GenresBlock}>
        {obj.genres.map(el => <span className={style.Genres} key={el.id}>{el.name}</span>)}
        </p>
      </div>
    </div>
  )
};

Card.propTypes = {
  // bla: PropTypes.string,
};


export default Card;
