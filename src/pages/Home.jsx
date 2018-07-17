import React, { Component } from 'react';
import styled from 'styled-components';

import MainMoviePost from 'components/MainMoviePost';

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
        <MainMoviePost limit={30} title="Newest Uploaded" />
        <MainMoviePost sort="rating" title="Top-Ratings" />
        <MainMoviePost limit={50} sort="download_count" title="Most Downloads" />
      </Page>
    );
  }
}

export default Home;
