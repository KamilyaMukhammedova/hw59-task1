import React, {useEffect} from 'react';
import MovieHook from "../MovieHook/MovieHook";

const MoviesListHook = (props) => {
  useEffect(() => {
    console.log('[movies list] has changed');
  }, [props.movies]);

  return props.movies.map(movie => (
    <MovieHook
      key={movie.id}
      title={movie.title}
      id={movie.id}
      movie={movie}
      onChangeMovie={props.onChangeMovie}
      onRemove={props.onRemove}
    />
  ));
};

export default MoviesListHook;