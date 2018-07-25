/* eslint-disable react/forbid-prop-types */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import device from 'response';

const StyledSuggestItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 12px;
  font-size: 14px;
  font-weight: 300;
  transition: all 0.3s ease-in-out;

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

const WrapPoster = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Poster = styled.img`
  display: block;
  width: 100%;
  transition: transform 0.15s ease-in-out;
`;

const Info = styled.div`
  width: 100%;
  padding: 12px 8px;

  @media ${device.mobileL} {
    padding: 16px 24px;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
`;

const Title = styled.h2`
  font-weight: 300;
  font-size: 21px;
  line-height: 1.4em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  word-break: break-word;

  @media ${device.mobileL} {
    font-size: 24px;
  }
`;

const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
  color: #808080;

  @media ${device.mobileL} {
    font-size: 15px;
  }
`;

const Genre = styled.span`
  padding-right: 8px;
  padding-bottom: 4px;

  &:last-child {
    padding-right: 0;
  }
`;

const StyledLink = styled(Link)`
  margin-bottom: 50px;
  flex: 0 0 25%;

  @media ${device.laptop} {
    flex: 0 0 33%;
  }

  @media ${device.tablet} {
    flex: 0 0 50%;
  }

  @media ${device.mobileL} {
    flex: 0 0 100%;
  }
`;

const RatingNumber = styled.span`
  color: #f7b731;
  font-size: 13px;
  margin-left: 4px;

  @media ${device.mobileL} {
    font-size: 15px;
  }
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  @media ${device.mobileL} {
    font-size: 15px;
  }
`;

const Synopsis = styled.p`
  font-weight: 300;
  line-height: 1.4em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  word-break: break-word;
  color: #999;
`;

const SuggestItem = ({ movie }) => (
  <StyledLink to={`${process.env.PUBLIC_URL}/detail/${movie.id}`}>
    <StyledSuggestItem key={movie.id}>
      <WrapPoster>
        <Poster src={movie.medium_cover_image} alt={`${movie.title} Poster`} />
      </WrapPoster>
      <Info>
        <Title>
          {movie.title}
        </Title>
        {movie.genres ? (
          <Genres>
            {movie.genres.map((genre, index) => {
              if (index < 3) {
                return (
                  <Genre key={Math.random()}>
                    {genre}
                  </Genre>
                );
              }
              return null;
            })}
          </Genres>
        ) : null}
        <Ratings>
          <span>
            <i className="fas fa-star" style={{ color: '#f7b731' }} />
          </span>
          <RatingNumber>
            {movie.rating}
          </RatingNumber>
        </Ratings>
        <Synopsis>
          {movie.synopsis}
        </Synopsis>
      </Info>
    </StyledSuggestItem>
  </StyledLink>
);

SuggestItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default SuggestItem;
