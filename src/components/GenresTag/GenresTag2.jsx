import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabelButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
`;

const Dot = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  background: ${({ color } = this.props) => `${color}`};
`;

const Label = styled.a`
  padding: 10px 15px;
  border: 1px solid #ededed;
  border-radius: 3px;
  margin-right: 8px;
  margin-bottom: 10px;
  font-size: 13px;
  text-decoration: none;
  color: #242424;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    border-color: #242424;
  }
  cursor: pointer;
`;

class GenresTag2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: 1,
          sort: '',
          label: 'All',
          dotColor: '#eaeaea',
        },
        {
          id: 2,
          sort: 'action',
          label: 'Action',
          dotColor: '#f98667',
        },
        {
          id: 3,
          sort: 'sci-fi',
          label: 'Sci-Fi',
          dotColor: '#c2ced2',
        },
        {
          id: 4,
          sort: 'drama',
          label: 'Drama',
          dotColor: '#7cbef1',
        },
        {
          id: 5,
          sort: 'animation',
          label: 'Animation',
          dotColor: '#80c88f',
        },
        {
          id: 6,
          sort: 'comedy',
          label: 'Comedy',
          dotColor: '#ff6348',
        },
      ],
    };
  }

  render() {
    const { categories } = this.state;
    const { changeGenres, genre } = this.props;
    return (
      <StyledLabelButton>
        {categories.map(category => (
          <Label
            key={category.id}
            onClick={() => changeGenres(category.sort)}
            style={genre !== category.label.toLowerCase() ? null : { borderColor: '#242424' }}
          >
            <Dot color={category.dotColor} />
            {category.label}
          </Label>
        ))}
      </StyledLabelButton>
    );
  }
}

GenresTag2.propTypes = {
  changeGenres: PropTypes.func,
  genre: PropTypes.string,
};

GenresTag2.defaultProps = {
  changeGenres: null,
  genre: '',
};

export default GenresTag2;
