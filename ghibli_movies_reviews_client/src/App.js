import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import NavBar from './components/NavBar'
import MoviesPage from './components/movies/MoviesPage';
import Movie from './components/movies/Movie';
import './App.css'

class App extends Component {

  state = {
    movies: []
  }

  async componentDidMount(){
    const url = "https://ghibliapi.herokuapp.com/films"
    const resp = await fetch(url)
    const data = await resp.json()
    this.setState({movies: data})
  }



  render(){
    return (
        <Router>
            <NavBar/>
            <Switch>
              <Route exact path={`/movies/:movieID`} render={routerProps => <Movie {...routerProps} movies={this.state.movies}/>} />
              <Route exact path="/" render={() => 
                <div>
                <strong><h1>Studio Ghibli</h1></strong>
                <p>
                Studio Ghibli was founded in 1985 by animated film directors Isao Takahata and Hayao Miyazaki, and has produced twenty-two feature-length films.  Most Studio Ghibli films ranked number one at the box office in Japan in the year in which they were released.  SPIRITED AWAY, directed by Hayao Miyazaki and released in 2001, is the all-time highest grossing film in Japan, earning over 30 billion yen at the box office. 
                <br></br>
                <br></br>
                Studio Ghibli films have garnered numerous awards and critical acclaim from film critics and animation specialists around the world.  SPIRITED AWAY was awarded the Golden Bear as the Best Feature Film at the 2002 Berlin International Film Festival and won the 2002 Academy Award for Best Animated Feature Film.  In October 2001, Studio Ghibli, in conjunction with The Tokuma Memorial Cultural Foundation for Animation, founded the Ghibli Museum, Mitaka, designed by Hayao Miyazaki.
                <br></br>
                <br></br>
                THE WIND RISES (2013), THE TALE OF THE PRINCESS KAGUYA (2013), WHEN MARNIE WAS THERE (2014) and THE RED TURTLE (2016), the last four films released by Studio Ghibli, have earned the studio four consecutive Academy Award nominations for Best Animated Feature Film.  The studio is currently working on a new production.
                </p>
                </div>} 
              />
              <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} />
            </Switch>
        </Router>
    )
  }
}

export default App;