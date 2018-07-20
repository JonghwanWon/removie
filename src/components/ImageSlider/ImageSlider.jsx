import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes, { object } from 'prop-types';
import Button from 'components/Button';
import device from 'response';
import Slide from './Slide';

const StyledImageSlider = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  height: 100%;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
  }
`;

const SlideList = styled.ul`
  width: 50%;
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  list-style: none;

  @media ${device.laptop} {
    width: 70%;
    margin-bottom: 80px;
  }

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobileL} {
    margin-bottom: 24px;
  }
`;

const PreviousButton = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  display: none;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #fff;
  opacity: 0.8;
  z-index: 1000;
  cursor: pointer;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15);
  transform: translateY(-50%);

  &:before {
    content: '';
    border-right: 20px solid #8d8d8d;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    transition: all 0.2s ease-in-out;
    transform: translateX(-20%);
  }

  &:hover::before {
    border-right-color: #242424;
  }

  @media ${device.laptop} {
    display: flex;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

const NextButton = styled(PreviousButton)`
  left: auto;
  right: 5%;
  &:before {
    border-left: 20px solid #8d8d8d;
    border-right: none;
    transform: translateX(20%);
  }
  &:hover::before {
    border-left-color: #242424;
  }
`;

const StyledMovieInfo = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 40px 0;
  text-align: center;
  color: #242424;
  transition: ${({ sliding } = this.props) => (sliding ? 'none' : 'all 0.5s ease-in-out')};
  transform: ${({ sliding } = this.props) => (sliding ? 'translateY(3%)' : 'translateY(0)')};
  opacity: ${({ sliding } = this.props) => (sliding ? '0' : '1')};

  @media ${device.laptop} {
    width: 85%;
  }

  @media ${device.mobileL} {
    padding: 0;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 8px;
  line-height: 1.4;

  @media ${device.mobileL} {
    font-size: 32px;
  }
`;

const Year = styled.h3`
  font-size: 21px;
  font-weight: 300;
  margin-bottom: 24px;

  @media ${device.table} {
    display: none;
  }
`;

const Genres = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 400;
`;

const Genre = styled.li`
  margin-right: 12px;
  margin-bottom: 12px;
  &:last-child {
    margin-right: 0;
  }

  @media ${device.mobileL} {
    margin-bottom: 4px;
  }
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
  color: #3c3c3c;
  text-align: center;

  @media ${device.mobileL} {
    display: none;
  }
`;

const WebNextButton = styled.div`
  position: relative;
  flex: 1;
  height: 60px;
  z-index: 10;
  cursor: pointer;

  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: 30%;
    width: 20%;
    height: 1px;
    background: #242424;
    transition: transform 0.25s ease;
    transform-origin: right;
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    content: '';
    border-right: 2px solid #242424;
    border-top: 2px solid #242424;
    transform: translate(-50%, -50%) rotate(45deg);
    transform-origin: center;
  }

  &:hover {
    &:before {
      transform: scaleX(2);
    }
  }

  @media ${device.laptop} {
    display: none;
  }

  @media ${device.mobileL} {
    display: block;
  }
`;

const WebPrevButton = styled(WebNextButton)`
  &:before {
    left: auto;
    right: 30%;
    transform-origin: left;
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-135deg);
  }
`;

class ImageSlider extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(object).isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    const { movies } = this.props;
    this.state = {
      currentSlide: 0,
      sliding: false,
      movies,
    };
  }

  getOrder = (slideIndex) => {
    // active slide
    const { currentSlide } = this.state;
    const { movies } = this.state;
    // slide count
    const numItems = movies.length || 1;

    if (slideIndex - currentSlide < 0) {
      return numItems - Math.abs(slideIndex - currentSlide);
    }
    return slideIndex - currentSlide;
  };

  nextSlide = () => {
    const { currentSlide } = this.state;
    const { movies } = this.state;
    const numItems = movies.length || 1;

    this.doSliding(currentSlide === numItems - 1 ? 0 : currentSlide + 1);
  };

  prevSlide = () => {
    const { currentSlide } = this.state;
    const { movies } = this.state;
    const numItems = movies.length || 1;

    this.doSliding(currentSlide === 0 ? numItems - 1 : currentSlide - 1);
  };

  doSliding = (currentSlide) => {
    this.setState({
      sliding: true,
      currentSlide,
    });
    setTimeout(() => {
      this.setState({
        sliding: false,
      });
    }, 50);
  };

  render() {
    const { movies, sliding, currentSlide } = this.state;
    const matchIndex = (index) => {
      if (index === movies.length - 1) return '0';
      return index + 1;
    };

    return (
      <StyledImageSlider>
        <PreviousButton onClick={() => this.prevSlide()} />
        <NextButton onClick={() => this.nextSlide()} />
        <SlideList>
          {movies.map((movie, index) => (
            <Slide
              key={movie.id}
              poster={movie.large_cover_image}
              title={movie.title}
              order={this.getOrder(index)}
            />
          ))}
        </SlideList>
        <StyledMovieInfo sliding={sliding}>
          <Title>
            {movies[matchIndex(currentSlide)].title}
          </Title>
          <Year>
            {movies[matchIndex(currentSlide)].year}
          </Year>
          {movies[matchIndex(currentSlide)].genres ? (
            <Genres>
              {movies[matchIndex(currentSlide)].genres.map(genre => (
                <Genre key={Math.random()}>
                  {genre}
                </Genre>
              ))}
            </Genres>
          ) : null}
          <Synopsis>
            {movies[matchIndex(currentSlide)].synopsis}
          </Synopsis>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <WebPrevButton onClick={() => this.prevSlide()} />
            <Button
              value="View More"
              to={`${process.env.PUBLIC_URL}/detail/${movies[matchIndex(currentSlide)].id}`}
              href={`${process.env.PUBLIC_URL}/detail/${movies[matchIndex(currentSlide)].id}`}
            />
            <WebNextButton onClick={() => this.nextSlide()} />
          </div>
        </StyledMovieInfo>
      </StyledImageSlider>
    );
  }
}

export default ImageSlider;
