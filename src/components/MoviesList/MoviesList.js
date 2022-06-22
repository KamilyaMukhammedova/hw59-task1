import React, {Component} from 'react';
import Movie from "../Movie/Movie";

class MoviesList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[movies list] should update');
  }

  render() {
    return this.props.movies.map(movie => (
      <Movie
        key={movie.id}
        title={movie.title}
        id={movie.id}
        onChangeMovie={this.props.onChangeMovie}
      />
    ));
  }
}

export default MoviesList;