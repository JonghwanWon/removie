import React, { Component } from 'react';
import styled from 'styled-components';
// import { FetchToServer } from 'lib';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin: 250px auto 0;
  align-items: flex-start;
`;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Page>
        <div>
          {'this is "home" page'}
        </div>
        <Link to="/movie_list" href="/movie_list/">
          <button type="button">
            {'link test'}
          </button>
        </Link>
      </Page>
    );
  }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
