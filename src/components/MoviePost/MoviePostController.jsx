import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DropDown from './DropDown';

const StyledController = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
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
  transition: border 0.2s linear;
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

const MoviePostController = ({ choiceSort, selectedSort }) => (
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
    <DropDown />
  </StyledController>
);

MoviePostController.propTypes = {
  choiceSort: PropTypes.func,
  selectedSort: PropTypes.string.isRequired,
};

MoviePostController.defaultProps = {
  choiceSort: null,
};

export default MoviePostController;
