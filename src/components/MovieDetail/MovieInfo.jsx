/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Rating from 'components/Rating';

const StyledMovieInfo = styled.div`
  flex: 2;
  margin-left: 80px;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
`;

const Info = styled.div`
  display: flex;
  margin-top: 16px;
  font-size: 14px;

  & > * {
    position: relative;
  }

  & > *:not(:last-child):after {
    content: '';
    position: absolute;
    top: 50%;
    right: -12px;
    width: 1px;
    height: 80%;
    transform: translateY(-50%);
    background: #fff;
  }
`;

const Runtime = styled.span`
  margin-right: 24px;
`;

const Year = styled.span`
  margin-right: 24px;
`;

const Genres = styled.ul`
  display: flex;
  & li {
    padding-right: 8px;

    &:last-child {
      padding-right: 0;
    }
  }
`;

const StyledRating = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const RatingNumber = styled.span`
  margin-left: 8px;
`;

const StyledLike = styled.div`
  display: flex;
  margin-top: 16px;
  flex-flow: row wrap;

  & span {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const StyledDescription = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DescriptionTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
`;

const Description = styled.p`
  line-height: 1.8;
  font-weight: 300;
`;

const StyledCast = styled(StyledDescription)``;
const CastTitle = styled(DescriptionTitle)``;

const Actor = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ActorProfile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  margin-bottom: 12px;
`;

const ActorName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 16px;
`;

const ActorImage = styled.div`
  border: 1px solid #fff;
  border-radius: 50%;
  overflow: hidden;
`;

const MovieInfo = ({ movie }) => {
  const addComma = (num) => {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
  };
  return (
    <StyledMovieInfo>
      <Title>
        {movie.title}
      </Title>
      <Info>
        <Year>
          {movie.year}
        </Year>
        <Runtime>
          {`${movie.runtime} min`}
        </Runtime>
        <Genres>
          {movie.genres ? movie.genres.map(genre => (
            <li key={Math.random()}>
              {genre}
            </li>
          )) : null}
        </Genres>
      </Info>
      <StyledRating>
        <Rating name="movieRating" rating={movie.rating} />
        <RatingNumber>
          {`${movie.rating} / 10`}
        </RatingNumber>
      </StyledRating>
      <StyledLike>
        <span>
          <i className="fas fa-download" style={{ marginRight: 8 }} />
          {addComma(movie.download_count)}
        </span>
        <span>
          <i className="fas fa-heart" style={{ marginRight: 8 }} />
          {addComma(movie.like_count)}
        </span>
      </StyledLike>
      <StyledDescription>
        <DescriptionTitle>
          {'Synopsis'}
        </DescriptionTitle>
        <Description>
          {movie.description_full}
        </Description>
      </StyledDescription>
      {movie.cast ? (
        <StyledCast>
          <CastTitle>
            {'Cast'}
          </CastTitle>
          <Actor>
            {movie.cast.map(item => (
              <ActorProfile key={item.imdb_code}>
                <ActorName>
                  <strong>
                    {item.name}
                  </strong>
                  {item.character_name ? (
                    <em>
                      {` as ${item.character_name}`}
                    </em>
                  ) : null}
                </ActorName>
                {item.url_small_image ? (
                  <ActorImage>
                    <img
                      src={item.url_small_image}
                      alt={`${item.name} thumbnail`}
                      style={{ display: 'block' }}
                    />
                  </ActorImage>
                ) : null}
              </ActorProfile>
            ))}
          </Actor>
        </StyledCast>
      ) : null}
    </StyledMovieInfo>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieInfo;
