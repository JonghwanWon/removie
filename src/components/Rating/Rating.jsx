import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

const Rating = ({ name, size, rating }) => (
  <StarRatingComponent
    style={{ fontSize: size }}
    name={name}
    starColor="#ffb400"
    emptyStarColor="#ffb400"
    value={rating / 2}
    editing={false}
    renderStarIcon={(index, value) => (
      <span>
        <i className={index <= value ? 'fas fa-star' : 'far fa-star'} />
      </span>
    )}
    renderStarIconHalf={() => (
      <span>
        <span style={{ position: 'absolute' }}>
          <i className="far fa-star" />
        </span>
        <span>
          <i className="fas fa-star-half" />
        </span>
      </span>
    )}
  />
);

Rating.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number,
  size: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
  size: 16,
};

export default Rating;
