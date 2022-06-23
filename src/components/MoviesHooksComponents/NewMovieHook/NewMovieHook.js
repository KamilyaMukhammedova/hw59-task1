import React, {useEffect} from 'react';

const NewMovieHook = (props) => {
  useEffect(() => {
    console.log('[new movie] has changed');
  }, [props.newMovieName]);

  return (
    <div className="d-flex justify-content-between">
      <input
        type="text"
        className="form-control MovieInput"
        placeholder="Add new movie"
        name="newMovieName"
        value={props.newMovieName}
        onChange={(e) => props.onNewMovie(e.target.value)}
      />
      <button
        type="button"
        className="btn btn-success"
        onClick={props.onAdd}
      >
        Add
      </button>
    </div>
  );
};

export default NewMovieHook;