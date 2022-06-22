import React, {Component} from 'react';
import {nanoid} from "nanoid";

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
      <div>

      </div>
    );
  }
}

export default MoviesContainer;