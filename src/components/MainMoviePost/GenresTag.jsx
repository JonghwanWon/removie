import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import device from 'response';

const StyledGenresTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
  cursor: pointer;
  font-size: 13px;
`;

const Tag = styled.div`
  padding: 10px 16px;
  border: 1px solid #ededed;
  border-radius: 5px;
  margin-right: 8px;
  transition: border 0.25s ease-in-out;
  &:hover {
    border-color: #242424;
  }

  &:last-child {
    margin-right: 0;
  }

  @media ${device.tablet} {
    margin-bottom: 10px;
  }
`;

const ActiveTag = styled(Tag)`
  border-color: #242424;
`;

const Dot = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  background: ${({ color } = this.props) => `${color}`};
`;

const categories = [
  {
    id: 0,
    label: 'All',
    dotColor: '#eaeaea',
  },
  {
    id: 1,
    label: 'Action',
    dotColor: '#f98667',
  },
  {
    id: 2,
    label: 'Sci-fi',
    dotColor: '#c2ced2',
  },
  {
    id: 3,
    label: 'Drama',
    dotColor: '#7cbef1',
  },
  {
    id: 4,
    label: 'Animation',
    dotColor: '#80c88f',
  },
  {
    id: 5,
    label: 'Comedy',
    dotColor: '#ff6348',
  },
];

const GenresTag = ({ changeGenres, genre }) => (
  <StyledGenresTag>
    {categories.map(
      category => (genre.toLowerCase() !== category.label.toLowerCase() ? (
        <Tag onClick={() => changeGenres(category.label.toLowerCase())}>
          <Dot color={category.dotColor} />
          <span>
            {category.label}
          </span>
        </Tag>
      ) : (
        <ActiveTag onClick={() => changeGenres(category.label.toLowerCase())}>
          <Dot color={category.dotColor} />
          <span>
            {category.label}
          </span>
        </ActiveTag>
      )),
    )}
  </StyledGenresTag>
);

GenresTag.propTypes = {
  changeGenres: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

export default GenresTag;
