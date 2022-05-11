import React from "react"
import ReviewsContainer from "../../../container/ReviewsContainer"
import './Movie.css'

const Movie = ({match, movies}) => {
	if(movies[match.params.movieID]){
		return(
			<div className="movie-page-container">
				<div className="title-and-image-info">
					<h1>{movies[match.params.movieID].title}</h1>
					<img alt={""} src={movies[match.params.movieID].image} width="400"/>
					
					<p className="description">{movies[match.params.movieID].description}</p>
					<label style={{fontSize: 20}}>Release Date: </label>
					{movies[match.params.movieID].release_date}

					<label style={{fontSize: 20}}>Director: </label>
					{movies[match.params.movieID].director}

					<label style={{fontSize: 20}}>Rate Score: </label>
					{movies[match.params.movieID].rt_score}
				</div>

				
				<ReviewsContainer movieID={match.params.movieID} />
			</div>
		)
	}
}

export default Movie