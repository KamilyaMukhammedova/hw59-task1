import React, {Component} from 'react';

class NewMovie extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between">
        <input type="text" className="form-control MovieInput" placeholder="Add new movie"/>
        <button type="button" className="btn btn-success">Add</button>
      </div>
    );
  }
}

export default NewMovie;