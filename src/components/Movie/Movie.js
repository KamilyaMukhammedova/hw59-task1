import React, {Component} from 'react';

class Movie extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between mb-4">
        <input
          type="text"
          className="form-control MovieInput"
          name="title"
          value={this.props.title}
        />
        <button type="button" className="btn btn-danger">X</button>
      </div>
    );
  }
}

export default Movie;