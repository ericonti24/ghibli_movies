import React from "react"
import ReviewsContainer from "../../container/ReviewsContainer"


const Movie = ({match, movies}) => {
    if(movies[match.params.movieID]){
        return(
            <div>
                <h1>{movies[match.params.movieID].title}</h1>
                <img alt={""} src={movies[match.params.movieID].image} width="400"/>
                <br></br>
                <p style={{marginRight: 2030, color: "white", fontSize: 20}}>{movies[match.params.movieID].description}</p>

                <label style={{fontSize: 20}}>Release Date: </label>
                {movies[match.params.movieID].release_date}
                <br></br>
                <label style={{fontSize: 20}}>Director: </label>
                {movies[match.params.movieID].director}
                <br></br>
                <label style={{fontSize: 20}}>Rate Score: </label>
                {movies[match.params.movieID].rt_score}
                <br></br><br></br>
                <ReviewsContainer movieID={match.params.movieID} />
                
            </div>
        )
    }
}

export default Movie