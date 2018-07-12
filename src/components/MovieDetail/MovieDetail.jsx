import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Rating from 'components/Rating';

const StyledMovieDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeroCover = styled.div`
  position: absolute;
  top: 170px;
  left: 0;
  width: 100%;
  height: 750px;
  z-index: -1;
  overflow: hidden;
`;

const HeroCoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const HeroCoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const StyledMovieInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 1400px;
  padding: 0 50px;
`;

const WrapPoster = styled.div`
  flex: 1;
  padding: 10px 12px;
  background: #fff;
  height: 620px;
`;

const MoviePoster = styled.img`
  display: block;
  width: 100%;
`;

const MovieInfo = styled.div`
  flex: 2;
  margin-left: 80px;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 400;
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

const Genres = styled.div`
  & span {
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

const Trailer = styled.div``;
const MovieDetail = ({ movie }) => {
  const addComma = (num) => {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
  };

  return (
    <StyledMovieDetail>
      <HeroCover>
        <HeroCoverOverlay />
        <HeroCoverImage src={movie.background_image} alt={`${movie.title} background`} />
      </HeroCover>
      <StyledMovieInfo>
        <WrapPoster>
          <MoviePoster src={movie.large_cover_image} alt={`${movie.title} poster`} />
        </WrapPoster>
        <MovieInfo>
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
              {movie.genres
                ? movie.genres.map(genre => (
                  <span key={Math.random()}>
                    {genre}
                  </span>
                ))
                : null}
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
                    <em>
                      {` as ${item.character_name}`}
                    </em>
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
        </MovieInfo>
      </StyledMovieInfo>

      <Trailer>
        {movie.yt_trailer_code ? (
          <iframe
            title={`${movie.title} Trailer`}
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
          />
        ) : null}
      </Trailer>
      <img src={movie.large_screenshot_image1} alt={`${movie.title} screenshot`} />
      <img src={movie.large_screenshot_image2} alt={`${movie.title} screenshot`} />
      <img src={movie.large_screenshot_image3} alt={`${movie.title} screenshot`} />
    </StyledMovieDetail>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default MovieDetail;
