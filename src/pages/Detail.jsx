import React, { Component } from 'react';
import styled from 'styled-components';
import { FetchToServerDetail } from 'lib';
import { Spinner2 } from 'components/Spinner';

import MovieDetail from 'components/MovieDetail';

const Page = styled.div`
  margin-top: 240px;
`;

class Detail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
  }

  componentDidMount() {
    this.callApi();
  }

  setData = (data) => {
    this.setState({
      result: data.movie,
    });
  };

  callApi = () => FetchToServerDetail(this.props.match.params.dataID, true, true, this.setData);

  render() {
    const { result } = this.state;
    console.log(result);
    return (
      <Page>
        {result ? <MovieDetail movie={result} /> : <Spinner2 />}
      </Page>
    );
  }
}

export default Detail;
