import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import Slider from 'react-slick';

import {
  PATH_BASE, PARAM_LIMIT, PARAM_SORT, PARAM_PAGE,
} from 'components/Constant';
import device from 'response';
import Button from 'components/Button';

const StyledMovieHero = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 80px;
`;

const SlideItem = styled.div`
  position: relative;
  display: flex !important;
  justify-content: center;
  width: 100%;
  height: 660px;
  overflow: hidden;

  @media ${device.laptopL} {
    height: 540px;
  }

  @media ${device.tablet} {
    height: 480px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url(${({ poster } = this.props) => `${poster}`});
  background-repeat: norepeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -10;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  max-width: 960px;
  margin-bottom: 80px;

  @media ${device.laptopL} {
    max-width: 60%;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 24px;

  @media ${device.tablet} {
    font-size: 36px;
  }
  @media ${device.mobileL} {
    font-size: 32px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  z-index: -1;
`;

const Synopsis = styled.p`
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  line-height: 1.8em;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  margin-bottom: 36px;
  font-size: 16px;
  font-weight: 300;
  color: #efefef;
  text-align: center;

  @media ${device.mobileL} {
    font-size: 14px;
  }
`;

const NextButton = styled.div`
  width: 15%;
  height: 100%;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;

  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: 30%;
    width: 20%;
    height: 1px;
    background: #fff;
  }
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    content: '';
    border-right: 2px solid #fff;
    border-top: 2px solid #fff;
    transform: translate(-50%, -50%) rotate(45deg);
    transform-origin: center;
  }
`;

const PrevButton = styled(NextButton)`
  right: auto;
  left: 0;
  &:before {
    left: auto;
    right: 30%;
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-135deg);
  }
`;

class MovieHero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: null,
    };
  }

  componentDidMount() {
    this.callApi();
  }

  componentWillUnmount() {
    this.source.cancel('canceled due to new request');
  }

  callApi = async () => {
    const { limit, sort, page } = this.props;

    if (typeof this.source !== typeof undefined) {
      this.source.cancel('canceled due to new request');
    }

    this.source = axios.CancelToken.source();

    return axios(`${PATH_BASE}?${PARAM_LIMIT + limit}&${PARAM_SORT + sort}&${PARAM_PAGE}${page}`, {
      cancelToken: this.source.token,
    })
      .then(result => this.setState({ movies: result.data.data.movies }))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err);
        } else {
          console.log(err);
        }
      });
  };

  pause = () => {
    this.slider.slickPause();
  };

  play = () => {
    this.slider.slickPlay();
  };

  next = () => {
    this.slider.slickNext();
  };

  previous = () => {
    this.slider.slickPrev();
  };

  render() {
    const { movies } = this.state;

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      pauseOnHover: true,
    };

    return (
      <StyledMovieHero>
        <NextButton
          onClick={() => this.next()}
          onMouseEnter={this.pause}
          onMouseLeave={this.play}
        />
        <PrevButton
          onClick={() => this.previous()}
          onMouseEnter={this.pause}
          onMouseLeave={this.play}
        />
        {movies ? (
          <Slider
            ref={(c) => {
              this.slider = c;
            }}
            {...settings}
          >
            {movies.map(movie => (
              <SlideItem key={movie.id}>
                <Overlay />
                <MovieInfo>
                  <Title>
                    {movie.title}
                  </Title>
                  <Synopsis>
                    {movie.synopsis}
                  </Synopsis>
                  <BackgroundImage poster={movie.background_image} />
                  <Button
                    value="View More"
                    to={`${process.env.PUBLIC_URL}/detail/${movie.id}`}
                    href={`${process.env.PUBLIC_URL}/detail/${movie.id}`}
                    theme="ghost"
                  />
                </MovieInfo>
              </SlideItem>
            ))}
          </Slider>
        ) : null}
      </StyledMovieHero>
    );
  }
}

MovieHero.propTypes = {
  limit: PropTypes.number,
  sort: PropTypes.string,
};

MovieHero.defaultProps = {
  limit: 5,
  sort: 'like_count',
};

export default MovieHero;
