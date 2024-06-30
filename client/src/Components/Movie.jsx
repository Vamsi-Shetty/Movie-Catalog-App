import React from 'react'

const Movie = ({movie}) => {
  console.log(movie)
  /**
   * 
   */
  return (
    <div className='shadow-md border-2 m-2 h-auto w-60 p-2 text-wrap truncate'>
        {/* <img src={movie.poster} alt={movie.title} /> */}
        <h4 className='font-bold'>{movie.title}</h4>
        <h5 className='font-medium'>{movie.genres}</h5>
        <p>{movie.release_year}</p>
        <p>{movie.imdb_rating}</p>
    </div>
  )
}

export default Movie