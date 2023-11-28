import React from 'react'
import { useLocation } from 'react-router-dom'
import './Detail.css';

const Detail = () => {
  const location = useLocation();
  const { year, title, summary, poster, genres } = location.state;
  console.log(location);
  return (
    <div className='Detail'>
      <div className='boxwrap'>
        <img src={poster} alt={title} />
        <div className='information'>
          <p>{year}</p>
          <p>{title}</p>
          <p>{summary}</p>
          <p>{genres}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail