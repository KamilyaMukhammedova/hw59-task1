import React, {Component} from 'react';

class NewMovie extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[new movie] should update');

    return nextProps.newMovieName !== this.props.newMovieName;
  }

  componentDidUpdate() {
    console.log('[new movie] didUpdate');
  }

  render() {
    return (
      <div className="d-flex justify-content-between">
        <input
          type="text"
          className="form-control MovieInput"
          placeholder="Add new movie"
          name="newMovieName"
          value={this.props.newMovieName}
          onChange={(e) => this.props.onNewMovie(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={this.props.onAdd}
        >
          Add
        </button>
      </div>
    );
  }
}

export default NewMovie;