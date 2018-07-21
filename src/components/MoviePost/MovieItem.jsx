import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import device from 'response';
import Rating from 'components/Rating';

const StyledMovieItem = styled.li`
  padding: 0 12px;
  margin-bottom: 24px;
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
      opacity: 1;
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
  background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.45));
  opacity: 0;
  transition: opacity 0.2s ease;
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
  word-break: break-word;
`;

const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
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
  -webkit-line-clamp: 13;
  -webkit-box-orient: vertical;
  font-size: 13px;
  color: #fff;
`;

const Ratings = styled.div`
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

const StyledLink = styled(Link)`
  flex: 1 0 20%;

  @media ${device.laptopL} {
    flex: 1 0 25%;
  }

  @media (max-width: 1280px) {
    flex: 1 0 33.3%;
  }

  @media (max-width: 1024px) {
    flex: 1 0 50%;
  }

  @media ${device.mobileL} {
    flex: 1 0 100%;
  }
`;

const MovieItem = ({
  dataID,
  poster,
  title,
  genres,
  runtime,
  synopsis,
  rating,
  longTitle,
  isLongTitle,
}) => (
  <StyledLink
    to={`${process.env.PUBLIC_URL}/detail/${dataID}`}
    href={`${process.env.PUBLIC_URL}/detail/${dataID}`}
  >
    <StyledMovieItem>
      <figure>
        <MovieSubInfo>
          <Runtime>
            {`${runtime} min`}
          </Runtime>
          <Ratings>
            <RatingNumber>
              {rating}
            </RatingNumber>
            <Rating name="starRating" rating={rating} />
          </Ratings>
          <Sysnopsis>
            {synopsis}
          </Sysnopsis>
          <Overlay />
          <MoviePoster src={poster} alt={`${title} Poster`} />
        </MovieSubInfo>
        <MovieInfo>
          <MovieTitle>
            {isLongTitle ? longTitle : title}
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
      </figure>
    </StyledMovieItem>
  </StyledLink>
);

MovieItem.propTypes = {
  dataID: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  runtime: PropTypes.number,
  synopsis: PropTypes.string,
  rating: PropTypes.number,
  longTitle: PropTypes.string,
  isLongTitle: PropTypes.bool,
};

MovieItem.defaultProps = {
  genres: undefined,
  runtime: 0,
  synopsis: '',
  rating: 0,
  longTitle: undefined,
  isLongTitle: false,
};

export default MovieItem;
