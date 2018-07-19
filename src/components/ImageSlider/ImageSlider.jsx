import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes, { object } from 'prop-types';
import Button from 'components/Button';
import Slide from './Slide';

const StyledImageSlider = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  height: 100%;
`;

const SlideList = styled.ul`
  flex: 3;
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  list-style: none;
`;

const PreviousButton = styled.div`
  position: absolute;
  top: 50%;
  left: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #fff;
  opacity: 0.8;
  z-index: 100;
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
`;

const NextButton = styled(PreviousButton)`
  display: flex;
  left: auto;
  right: -80px;
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
  flex: 2;
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
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 8px;
  line-height: 1.4;
`;

const Year = styled.h3`
  font-size: 21px;
  font-weight: 300;
  margin-bottom: 24px;
`;

const Genres = styled.ul`
display:flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
margin-bottom: 24px;
font-size: 16px;
font-weight: 400;
}`;

const Genre = styled.li`
  margin-right: 12px;
  margin-bottom: 12px;
  &:last-child {
    margin-right: 0;
  }
`;

const Synopsis = styled.p`
width: 90%;
margin-bottom: 40px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 5;
-webkit-box-orient: vertical;
word-wrap: break-word;
line-height: 1.6em;
height: 7.8em
font-weight: 400;
color: #3c3c3c;
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
          <Button
            value="View More"
            to={`${process.env.PUBLIC_URL}/detail/${movies[matchIndex(currentSlide)].id}`}
            href={`${process.env.PUBLIC_URL}/detail/${movies[matchIndex(currentSlide)].id}`}
          />
        </StyledMovieInfo>
      </StyledImageSlider>
    );
  }
}

export default ImageSlider;
