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
  flex: 1;
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
  &:first-child {
    flex: 1 0 90%;
    margin: 0 4px 8px;
  }
}
`;

const genres = [
  { name: 'All' },
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

const matchGenres = (genre) => {
  if (genre === 'All') {
    return '';
  }
  return genre;
};

const activeStyle = {
  borderColor: '#c0392b',
};

const GenresTag = ({ choiceGenre, selectedGenre }) => (
  <Genres>
    {genres.map(genre => (
      <Genre
        key={Math.random()}
        onClick={() => choiceGenre(matchGenres(genre.name))}
        style={matchGenres(genre.name) !== selectedGenre ? null : activeStyle}
      >
        {genre.name}
      </Genre>
    ))}
  </Genres>
);

GenresTag.propTypes = {
  choiceGenre: PropTypes.func,
  selectedGenre: PropTypes.string,
};

GenresTag.defaultProps = {
  choiceGenre: null,
  selectedGenre: '',
};

export default GenresTag;
