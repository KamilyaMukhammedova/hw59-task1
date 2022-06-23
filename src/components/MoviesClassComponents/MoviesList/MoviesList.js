import React, {PureComponent} from 'react';
import Movie from "../Movie/Movie";

class MoviesList extends PureComponent {
  componentDidUpdate() {
    console.log('[movies list] didUpdate');
  }

  render() {
    return this.props.movies.map(movie => (
      <Movie
        key={movie.id}
        title={movie.title}
        id={movie.id}
        onChangeMovie={this.props.onChangeMovie}
        onRemove={this.props.onRemove}
      />
    ));
  }
}

export default MoviesList;