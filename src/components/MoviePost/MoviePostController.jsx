import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledController = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin-bottom: 80px;
`;

const StyledSort = styled.div`
  align-self: flex-end;
`;
const SortButton = styled.button`
  padding: 16px 24px;
  margin-right: 8px;
  background: transparent;
  border: 1px solid rgb(237, 237, 237);
  border-radius: 5px;
  outline: none;
  font-size: 13px;
  font-weight: 300;
  color: rgb(36, 36, 36);
  transition: border 0.2s linear;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    border-color: #242424;
  }
`;

const sorts = [
  { id: 1, by: 'download_count', value: 'Most Downloads' },
  { id: 2, by: 'rating', value: 'Top Ratings' },
  { id: 3, by: 'like_count', value: 'Most Popular' },
  { id: 4, by: 'date_added', value: 'Newest' },
];

const activeStyle = {
  borderColor: '#2ecc71',
  color: '#2ecc71',
};

const MoviePostController = ({ choiceSort, selectedSort }) => (
  <StyledController>
    <StyledSort>
      {sorts.map(sort => (
        <SortButton
          key={sort.id}
          onClick={() => choiceSort(sort.by)}
          style={sort.by !== selectedSort ? null : activeStyle}
        >
          {sort.value}
        </SortButton>
      ))}
    </StyledSort>
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
