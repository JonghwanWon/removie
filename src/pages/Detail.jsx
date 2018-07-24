/* eslint-disable react/prop-types, max-len, react/destructuring-assignment */

import React, { Component } from 'react';
import styled from 'styled-components';
import { Spinner2 } from 'components/Spinner';
import axios from 'axios';

import MovieDetail from 'components/MovieDetail';

const Page = styled.div`
  margin-top: 173px;
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

  componentWillUnmount() {
    this.source.cancel('canceled due to new request');
  }

  callApi = async () => {
    await this.callDetailApi();
    await this.callSuggestApi();
  };

  callSuggestApi = () => {
    const id = this.props.match.params.dataID;
    if (typeof this.source !== typeof undefined) {
      this.source.cancel('canceled due to new request');
    }

    this.source = axios.CancelToken.source();

    return axios(`https://yts.am/api/v2/movie_suggestions.json?movie_id=${id}`, {
      cancelToken: this.source.token,
    })
      .then(result => this.setState({ suggest: result.data.data.movies }))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err);
        } else console.log(err);
      });
  };

  callDetailApi = () => {
    const id = this.props.match.params.dataID;
    const image = true;
    const cast = true;

    if (typeof this.source !== typeof undefined) {
      this.source.cancel('canceled due to new request');
    }

    this.source = axios.CancelToken.source();

    return axios(
      `https://yts.am/api/v2/movie_details.json?movie_id=${id}&with_images=${image}&with_cast=${cast}`,
      {
        cancelToken: this.source.token,
      },
    )
      .then(result => this.setState({ result: result.data.data.movie }))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err);
        } else {
          console.log(err);
        }
      });
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
