import React, {Component} from 'react';
import Movie from "../Movie/Movie";

class MoviesList extends Component {
  render() {
    return this.props.movies.map(movie => (
      <Movie
        key={movie.id}
        name={movie.name}
      />
    ));
  }
}

export default MoviesList;