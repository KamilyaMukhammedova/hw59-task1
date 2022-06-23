import React, {useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import NewMovieHook from "../../components/MoviesHooksComponents/NewMovieHook/NewMovieHook";
import MoviesListHook from "../../components/MoviesHooksComponents/MoviesListHook/MoviesListHook";

const MoviesContainerHooks = () => {
  const [movies, setMovies] = useState([
    {title: 'Harry Potter and the Chamber of Secrets', id: nanoid()},
    {title: 'Avengers: Infinity War', id: nanoid()},
    {title: 'Iron Man', id: nanoid()},
  ]);

  const [newMovieName, setNewMovieName] = useState('');

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies'));
    if (movies) {
      setMovies(movies);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);


  const onNewMovieName = (value) => {
    setNewMovieName(value);
  };

  const addNewMovie = () => {
    if(newMovieName !== '') {
      const newMovie = {title: newMovieName, id: nanoid()};
      setMovies([...movies, newMovie]);
    }

    setNewMovieName('');
  };

  const onChangeMovie = (id, value) => {
    const moviesCopy = movies.map(movie => {
      if(movie.id === id) {
        return {
          ...movie,
          title: value
        }
      }
      return movie;
    });

    setMovies(moviesCopy);
  };

  const onRemoveMovie = (e, id) => {
    const moviesArray = movies.filter(movie => movie.id !== id);
    setMovies(moviesArray);
  }


  return (
    <div className="Container">
      <NewMovieHook
        newMovieName={newMovieName}
        onNewMovie={onNewMovieName}
        onAdd={addNewMovie}
      />
      <p className="mt-4"><strong>To watch list:</strong></p>
      <MoviesListHook
        movies={movies}
        onChangeMovie={onChangeMovie}
        onRemove={onRemoveMovie}
      />
    </div>
  );
};

export default MoviesContainerHooks;