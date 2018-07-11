import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { PATH_BASE, QUERY_TERM, PARAM_LIMIT } from 'components/Constant';
import { MovieList } from 'components/MoviePost';
import { Spinner } from 'components/Spinner';

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  padding: 16px 0;
  border-bottom: 1px solid #ccc;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  background: transparent;
  font-size: 16px;
  color: #3d3d3d;
`;

const SearchIcon = styled.svg`
  margin: 0 16px;
`;

const SearchResult = styled.div`
  width: 100%;
  max-width: 1400px;
  padding-top: 80px;
  border-bottom: 1px solid #ccc;
`;

const SearchNotFound = styled.p`
  text-align: center;
  padding-bottom: 80px;
`;

const RemoveBtn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 16px;
  border: none;
  cursor: pointer;
  background: transparent;
  outline: none;
  font-size: 16px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 15px;
    height: 1px;
    background: #ccc;
    transition: all 0.2s ease;
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover {
    &:before,
    &:after {
      background: #242424;
      transform: translate(-50%, -50%);
    }
  }
`;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchToSearch();
  }

  handleOnChange = async (e) => {
    await this.setState({
      keyword: e.target.value,
      loaded: false,
      searchResult: null,
    });

    await this.fetchToSearch();
  };

  fetchToSearch = () => {
    const { keyword } = this.state;

    if (typeof this.source !== typeof undefined) {
      this.source.cancel('canceled due to new request');
    }

    this.source = axios.CancelToken.source();

    return axios(`${PATH_BASE}?${QUERY_TERM}${keyword}&${PARAM_LIMIT}${5}`, {
      cancelToken: this.source.token,
    })
      .then(result => this.setState({ searchResult: result.data.data, loaded: true }))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err);
        } else {
          console.log(err);
        }
      });
  };

  removeQuery = (e) => {
    e.preventDefault();

    this.setState({
      keyword: '',
    });
  };

  render() {
    const { keyword, searchResult, loaded } = this.state;

    return (
      <Fragment>
        <StyledSearch>
          <SearchIcon
            id="icon-search"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <circle
              fill="none"
              stroke="#242424"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2px"
              cx="9.92"
              cy="9.92"
              r="8.92"
            />
            <path
              fill="none"
              stroke="#242424"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2px"
              d="M16.89 16.85l5.58 5.59"
            />
          </SearchIcon>
          <StyledInput
            name="keyword"
            value={keyword}
            placeholder="Search for Movies"
            onChange={this.handleOnChange}
          />
          <RemoveBtn type="button" onClick={this.removeQuery} />
        </StyledSearch>
        {keyword !== '' ? (
          <SearchResult>
            {loaded ? (
              searchResult.movies ? (
                <MovieList movies={searchResult.movies} />
              ) : (
                <SearchNotFound>
                  {'could not bring a movie... Please check the query.'}
                </SearchNotFound>
              )
            ) : (
              <Spinner />
            )}
          </SearchResult>
        ) : null}
      </Fragment>
    );
  }
}

export default Search;
