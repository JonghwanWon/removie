import React, { Component } from 'react';
import styled from 'styled-components';
import BrowserDetection from 'react-browser-detection';

import MainMoviePost from 'components/MainMoviePost';
import MainPost from 'components/MainPost';
import MovieHero from 'components/MovieHero';

const browserHandler = {
  chrome: () => <MainPost limit={7} sort="like_count" />,
  default: null,
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 170px;
`;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Page>
        <MovieHero limit={5} sort="download_count" page={8} />
        <BrowserDetection>
          {browserHandler}
        </BrowserDetection>
        <MainMoviePost limit={30} title="Newest Uploaded" visibleColumn={5} />
        <MainMoviePost sort="rating" title="Top-Ratings" />
        <MainMoviePost limit={50} sort="download_count" title="Most Downloads" />
      </Page>
    );
  }
}

export default Home;
