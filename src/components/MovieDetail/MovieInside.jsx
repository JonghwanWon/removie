import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMovieInside = styled.div`
  margin-top: 170px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Heading = styled.h3`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 300;
  color: #333;
`;

const Contents = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const Trailer = styled.div`
  flex: 2;
  margin-right: 10px;
`;

const Images = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MovieInside = ({
  movieTitle, trailer, img1, img2, img3,
}) => (
  <StyledMovieInside>
    <Heading>
      {'Preview'}
    </Heading>
    <Contents>
      {trailer ? (
        <Trailer>
          <iframe
            title={`${movieTitle} Trailer`}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${trailer}`}
            style={{ border: 'none' }}
          />
        </Trailer>
      ) : null}
      <Images>
        <img style={{ width: '100%' }} src={img1} alt={`${movieTitle} screenshot-1`} />
        <img style={{ width: '100%' }} src={img2} alt={`${movieTitle} screenshot-2`} />
        <img style={{ width: '100%' }} src={img3} alt={`${movieTitle} screenshot-3`} />
      </Images>
    </Contents>
  </StyledMovieInside>
);

MovieInside.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  trailer: PropTypes.string,
  img1: PropTypes.string,
  img2: PropTypes.string,
  img3: PropTypes.string,
};

MovieInside.defaultProps = {
  trailer: null,
  img1: null,
  img2: null,
  img3: null,
};

export default MovieInside;
