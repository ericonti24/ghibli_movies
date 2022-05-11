import React from "react"
import { NavLink } from "react-router-dom"
import './MoviesList.css'

const MoviesList = ({ movies }) => {
    const renderMovies = Object.keys(movies).map((movieID) => (
			<div className="movie-card-container">
        <div className="movie-title">{movies[movieID].title}</div>
				<NavLink className="movie-card" key={movieID} to={`/movies/${movieID}`}>
					<img alt={""} src={movies[movieID].image} width="400"/>
				</NavLink>
			</div>
    ));
  
    return (
			<div className="container-and-header">
				<h3>Select a movie to see more details</h3>
				<div className="movies-container">{renderMovies}</div>
			</div>
		)
};

export default MoviesList