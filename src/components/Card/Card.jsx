import React from 'react';

import style from './Card.module.css'


const Card = ({ obj, img }) => {
  // const arr = obj.genres.map(el => el.name );
  // console.log(arr);
  // console.log(obj.genres.map(el => {el.genres}));
  return (
    <div className={style.CardWrapper}>
      <div>
        <img className={style.Picture} width='300' height='300' src={img} alt="" />
      </div>
      <div className={style.About}>
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



export default Card;
