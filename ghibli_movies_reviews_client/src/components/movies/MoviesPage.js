import React from 'react';
import MoviesList from './MoviesList';


const MoviesPage = ({ match, movies }) => {
  return (
    <div>
      <strong><h3>Select a movie to see more details</h3></strong>
      <MoviesList movies={movies} />
    </div>
    )
  }

export default MoviesPage