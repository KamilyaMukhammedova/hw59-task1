import React, {Component} from 'react';
import {nanoid} from "nanoid";
import NewMovie from "../../components/NewMovie/NewMovie";
import MoviesList from "../../components/MoviesList/MoviesList";

class MoviesContainer extends Component {
  state = {
    movies: [
      {name: 'Harry Potter and the Chamber of Secrets', id: nanoid()},
      {name: 'Avengers: Infinity War', id: nanoid()},
      {name: 'Iron Man', id: nanoid()},
    ],
  };

  render() {
    return (
      <div className="Container">
        <NewMovie/>
        <p className="mt-4"><strong>To watch list:</strong></p>
        <MoviesList movies={this.state.movies}/>
      </div>
    );
  }
}

export default MoviesContainer;