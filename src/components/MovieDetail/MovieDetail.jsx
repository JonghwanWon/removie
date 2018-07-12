import React, { Component } from 'react';

class MovieDetail extends Component {
  render() {
    const { movie } = this.props;
    return (
      <span>
        {movie.title}
      </span>
    );
  }
}

export default MovieDetail;
