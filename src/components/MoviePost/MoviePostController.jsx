import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DropDown from 'components/DropDown';

const StyledController = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  max-width: 1400px;
  margin-bottom: 40px;
  border-bottom: 1px solid #ddd;
`;

const SortButton = styled.button.attrs({
  type: 'button',
})`
  position: relative
  padding: 16px 8px 12px;
  margin-right: 16px;
  outline: none;
  border: none;
  background: transparent;
  color: rgb(36, 36, 36);
  font-size: 14px;
  font-weight: 300;

  &:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 0;
    bottom: -1px;
    right: 0;
    background: #1872af;
    transition: all 0.15s ease-in-out;
  }

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    &:after {
      width: 100%;

      right: auto;
      left: 0;
    }
  }
`;

const ActiveSortButton = styled(SortButton)`
  color: #0d588a;
  font-weight: 500;

  &:after {
    width: 100%;
  }
`;

const sorts = [
  { id: 1, by: 'date_added', value: 'Newest' },
  { id: 2, by: 'like_count', value: 'Most Popular' },
  { id: 3, by: 'rating', value: 'Top Ratings' },
  { id: 4, by: 'download_count', value: 'Most Downloads' },
];

const genres = [
  { id: 0, title: 'All' },
  { id: 1, title: 'Comedy' },
  { id: 2, title: 'Sci-Fi' },
  { id: 3, title: 'Horror' },
  { id: 4, title: 'Romance' },
  { id: 5, title: 'Action' },
  { id: 6, title: 'Thriller' },
  { id: 7, title: 'Drama' },
  { id: 8, title: 'Mystery' },
  { id: 9, title: 'Crime' },
  { id: 10, title: 'Animation' },
  { id: 11, title: 'Adventure' },
  { id: 12, title: 'Fantasy' },
];

const MoviePostController = ({
  choiceSort, selectedSort, choiceGenre, selectedGenre,
}) => (
  <StyledController>
    {sorts.map(
      sort => (sort.by !== selectedSort ? (
        <SortButton key={sort.id} onClick={() => choiceSort(sort.by)}>
          {sort.value}
        </SortButton>
      ) : (
        <ActiveSortButton key={sort.id} onClick={() => choiceSort(sort.by)}>
          {sort.value}
        </ActiveSortButton>
      )),
    )}
    <DropDown choiceGenre={choiceGenre} headerTitle={selectedGenre} genres={genres} />
  </StyledController>
);

MoviePostController.propTypes = {
  choiceSort: PropTypes.func,
  choiceGenre: PropTypes.func,
  selectedSort: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

MoviePostController.defaultProps = {
  choiceSort: null,
  choiceGenre: null,
};

export default MoviePostController;
