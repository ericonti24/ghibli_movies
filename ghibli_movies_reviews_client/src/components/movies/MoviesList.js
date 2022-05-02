import React from "react"
import { NavLink } from "react-router-dom"


const MoviesList = ({ movies }) => {
    const renderMovies = Object.keys(movies).map((movieID) => (
      <NavLink key={movieID} to={`/movies/${movieID}`}>
        <h2>{movies[movieID].title}</h2><br></br>
        <img alt={""} src={movies[movieID].image} width="400"/><br></br><br></br>
      </NavLink>
    ));
  
    return <div>{renderMovies}</div>;
};

export default MoviesList