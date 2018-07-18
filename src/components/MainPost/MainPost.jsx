import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ImageSlider from 'components/ImageSlider';
import { Spinner } from 'components/Spinner';
import { movieListApi } from 'lib';

const StyledMainPost = styled.div`
  width: 100%;
  height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px
  margin: 80px auto 50px;
`;

class MainPost extends Component {
  static propTypes = {
    sort: PropTypes.string.isRequired,
    limit: PropTypes.number,
  };

  static defaultProps = {
    limit: 20,
  };

  state = {};

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const { limit, sort } = this.props;
    const data = await movieListApi(limit, sort);
    this.setState({
      movies: data.movies,
    });
  };

  render() {
    const { movies } = this.state;
    return movies ? (
      <StyledMainPost>
        <ImageSlider movies={movies} />
      </StyledMainPost>
    ) : (
      <Spinner />
    );
  }
}
export default MainPost;
