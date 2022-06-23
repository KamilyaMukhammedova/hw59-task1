import React, {Component} from 'react';
import {nanoid} from "nanoid";
import NewMovie from "../../components/MoviesClassComponents/NewMovie/NewMovie";
import MoviesList from "../../components/MoviesClassComponents/MoviesList/MoviesList";

class MoviesContainer extends Component {
  state = {
    movies: [
      {title: 'Harry Potter and the Chamber of Secrets', id: nanoid()},
      {title: 'Avengers: Infinity War', id: nanoid()},
      {title: 'Iron Man', id: nanoid()},
    ],
    newMovieName: '',
  };


  onNewMovieName = (value) => {
    this.setState({newMovieName: value});
  }

  addNewMovie = () => {
    this.setState(prev => ({
      movies: [
        ...prev.movies,
        {title: this.state.newMovieName, id: nanoid()}
      ]
    }));
    this.setState({newMovieName: ''});
  }

  onChangeMovie = (id, value) => {
    const movies = this.state.movies.map(movie => {
     if(movie.id === id) {
       return {
         ...movie,
         title: value
       }
     }
     return movie;
   });

   this.setState({movies});
  }

  onRemoveMovie = (e, id) => {
    const movies = this.state.movies.filter(movie => movie.id !== id);
    this.setState({movies});
  }

  render() {
    return (
      <div className="Container">
        <NewMovie
          newMovieName={this.state.newMovieName}
          onNewMovie={this.onNewMovieName}
          onAdd={this.addNewMovie}
        />
        <p className="mt-4"><strong>To watch list:</strong></p>
        <MoviesList
          movies={this.state.movies}
          onChangeMovie={this.onChangeMovie}
          onRemove={this.onRemoveMovie}
        />
      </div>
    );
  }
}

export default MoviesContainer;