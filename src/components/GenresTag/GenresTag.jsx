import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Genres = styled.ul`
  display: flex;
  margin-top: 40px;
  width: 560px;
  flex-wrap: wrap;
`;

const Genre = styled.li`
  flex: 1 1 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  margin: 0 4px 8px;
  border: 1px solid rgb(237,237,237);
  border-radius: 3px;
  font-size: 13px;
  color: rgb(36, 36, 36);
  text-transform: capitalize;
  transition: border-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: #242424;
  }
}
`;

const genres = [
  { name: 'comedy', color: '#1abc9c' },
  { name: 'sci-fi', color: '#e67e22' },
  { name: 'horror', color: '#f1c40f' },
  { name: 'romance', color: '#9b59b6' },
  { name: 'action', color: '#2c3e50' },
  { name: 'thriller', color: '#7f8c8d' },
  { name: 'drama', color: '#ecf0f1' },
  { name: 'mystery', color: '#3498db' },
  { name: 'crime', color: '#27ae60' },
  { name: 'animation', color: '#e74c3c' },
  { name: 'adventure', color: '#d35400' },
  { name: 'fantasy', color: '#70a1ff' },
];

const GenresTag = ({ choiceGenre }) => (
  <Genres>
    {genres.map(genre => (
      <Genre key={Math.random()} onClick={() => choiceGenre(genre.name)}>
        {genre.name}
      </Genre>
    ))}
  </Genres>
);

GenresTag.propTypes = {
  choiceGenre: PropTypes.func,
};

GenresTag.defaultProps = {
  choiceGenre: null,
};

export default GenresTag;
