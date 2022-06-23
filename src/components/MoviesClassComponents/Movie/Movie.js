import React, {Component} from 'react';

class Movie extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[movie] should update');

    return nextProps.title !== this.props.title;
  }

  componentDidUpdate() {
    console.log('[movie] didUpdate');
  }

  render() {
    return (
      <div className="d-flex justify-content-between mb-4">
        <input
          type="text"
          className="form-control MovieInput"
          name="title"
          id={this.props.id}
          value={this.props.title}
          onChange={(e) => this.props.onChangeMovie(this.props.id, e.target.value)}
        />
        <button
          type="button"
          className="btn btn-danger"
          onClick={(e) => this.props.onRemove(e, this.props.id)}
        >
          X
        </button>
      </div>
    );
  }
}

export default Movie;