import React, { Component } from 'react';
import styled from 'styled-components';
import { FetchToServerDetail } from 'lib';

const Test = styled.div`
  margin-top: 240px;
  font-size: 42px;
  color: #ececec;
  text-align: center;
`;

class Detail extends Component {
  constructor(props) {
    super(props);

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

  callApi = () => FetchToServerDetail(7704, this.setData);

  render() {
    const { result } = this.state;
    console.log(result);
    return (
      <Test>
        {result ? result.id : null}
        {'testRoute'}
      </Test>
    );
  }
}

export default Detail;
