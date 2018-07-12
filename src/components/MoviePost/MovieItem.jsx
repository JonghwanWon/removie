import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import StarRatingComponent from 'react-star-rating-component';

const StyledMovieItem = styled.li`
  flex: 0 0 20%;
  padding: 0 12px;
  margin-bottom: 24px;
`;

const Movie = styled.figure`
  cursor: pointer;
`;

const MovieSubInfo = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: rgb(255, 255, 255) 0px 0.5px 0px 0px inset, rgba(0, 0, 0, 0.3) 0px 3px 10px;

  & span {
    opacity: 0;
    z-index: 30;
    transition: opacity 0.2s linear;
  }

  &:hover {
    .overlay {
      background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.45));
    }
    img {
      transform: scale(1.05);
    }
    span {
      opacity: 1;
    }
    div {
      opacity: 1;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  transition: all 0.2s ease-in-out;
  z-index: 10;
`;

const MoviePoster = styled.img`
  display: block;
  width: 100%;
  transition: all 0.15s linear;
`;

const MovieInfo = styled.div`
  margin: 16px 0 0;
  font-size: 14px;
  font-weight: 300;
`;

const MovieTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 21px;
  font-weight: 300;
  line-height: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
  color: #808080;
`;

const Genre = styled.span`
  padding-right: 8px;
  padding-bottom: 4px;

  &:last-child {
    padding-right: 0;
  }
`;

const Runtime = styled.span`
  position: absolute;
  top: 30px;
  left: 24px;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
`;

const Sysnopsis = styled.span`
  position: absolute;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  width: 100%;
  top: 70px;
  padding: 0 24px;
  line-height: 1.4em;
  -webkit-line-clamp: 15;
  -webkit-box-orient: vertical;
  font-size: 13px;
  color: #fff;
`;

const Rating = styled.div`
  position: absolute;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 30px;
  right: 24px;
  background: transparent;
  z-index: 30;
  opacity: 0;
  transition: opacity 0.2s linear;
`;

const RatingNumber = styled.span`
  margin-right: 8px;
  color: #fff;
`;

const MovieItem = ({
  dataID, poster, title, genres, runtime, synopsis, rating,
}) => (
  <StyledMovieItem>
    <Movie>
      <MovieSubInfo>
        <Runtime>
          {`${runtime} min`}
        </Runtime>
        <Rating>
          <RatingNumber>
            {rating}
          </RatingNumber>
          <StarRatingComponent
            style={{ fontSize: 16 }}
            name="app6"
            starColor="#ffb400"
            emptyStarColor="#ffb400"
            value={rating / 2}
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
        </Rating>
        <Sysnopsis>
          {synopsis}
        </Sysnopsis>
        <Overlay className="overlay" />
        <MoviePoster src={poster} alt={`${title} Poster`} />
      </MovieSubInfo>
      <MovieInfo>
        <MovieTitle>
          {title}
        </MovieTitle>
        {genres ? (
          <Genres>
            {genres.map(genre => (
              <Genre key={Math.random()}>
                {genre}
              </Genre>
            ))}
          </Genres>
        ) : null}
      </MovieInfo>
    </Movie>
  </StyledMovieItem>
);

MovieItem.propTypes = {
  dataID: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  runtime: PropTypes.number,
  synopsis: PropTypes.string,
  rating: PropTypes.number,
};

MovieItem.defaultProps = {
  genres: undefined,
  runtime: 0,
  synopsis: '',
  rating: 0,
};

export default MovieItem;
