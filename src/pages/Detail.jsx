/* eslint-disable react/prop-types, max-len, react/destructuring-assignment */

import React, { Component } from 'react';
import styled from 'styled-components';
import { FetchToServerDetail, FetchToServerSuggest } from 'lib';
import { Spinner2 } from 'components/Spinner';

import MovieDetail from 'components/MovieDetail';

const Page = styled.div`
  margin-top: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.callApi();
  }

  async componentWillReceiveProps() {
    await this.setState({
      result: null,
    });
    await this.callApi();
  }

  setData = (data) => {
    this.setState({
      result: data.movie,
    });
  };

  setSuggest = (data) => {
    this.setState({
      suggest: data.movies,
    });
  };

  callApi = async () => {
    await FetchToServerDetail(this.props.match.params.dataID, true, true, this.setData);
    await FetchToServerSuggest(this.props.match.params.dataID, this.setSuggest);
  };

  render() {
    const { result, suggest } = this.state;

    return (
      <Page>
        {result ? <MovieDetail movie={result} suggest={suggest} /> : <Spinner2 />}
      </Page>
    );
  }
}

export default Detail;
