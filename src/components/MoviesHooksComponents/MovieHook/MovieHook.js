import React, {useEffect} from 'react';

const MovieHook = (props) => {
  useEffect(() => {
    console.log('[movie] has changed');
  }, [props.movie]);

  return (
    <div className="d-flex justify-content-between mb-4">
      <input
        type="text"
        className="form-control MovieInput"
        name="title"
        id={props.id}
        value={props.title}
        onChange={(e) => props.onChangeMovie(props.id, e.target.value)}
      />
      <button
        type="button"
        className="btn btn-danger"
        onClick={(e) => props.onRemove(e, props.id)}
      >
        X
      </button>
    </div>
  );
};

export default MovieHook;