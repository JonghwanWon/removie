import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDropDown = styled.div`
  position: relative;
  width: 130px;
  padding: 16px 16px 12px;
  background: transparent;
  color: rgb(36, 36, 36);
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 0;
    bottom: -1px;
    right: 0;
    background: #1872af;
    transition: all 0.15s ease-in-out;
  }

  &:hover {
    &:after {
      width: 100%;

      right: auto;
      left: 0;
    }
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropDownList = styled.ul`
  position: absolute;
  width: 130px;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  z-index: 10;
`;

const DropDownItem = styled.li`
  padding: 8px 12px;
  font-size: 13px;
  background: transparent;
  transition: background 0.15s ease;

  &:first-chid {
    padding-top: 12px;
  }

  &:last-child {
    padding-bottom: 12px;
  }

  &:hover {
    background: #eee;
  }
`;

class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOpen: false,
    };
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }));
  };

  selectItem = (title) => {
    this.setState(prevState => ({
      headerTitle: title,
      listOpen: !prevState.listOpen,
    }));
  };

  render() {
    const { listOpen } = this.state;
    const { choiceGenre, headerTitle, genres } = this.props;

    return (
      <StyledDropDown onMouseEnter={() => this.toggleList()} onMouseLeave={() => this.toggleList()}>
        <StyledHeader>
          <span>
            {headerTitle}
          </span>
          {listOpen ? <i className="fas fa-caret-up" /> : <i className="fas fa-caret-down" />}
        </StyledHeader>
        {listOpen && (
          <DropDownList>
            {genres.map(genre => (
              <DropDownItem
                key={genre.id}
                onClick={() => {
                  choiceGenre(genre.title);
                  this.toggleList();
                }}
              >
                {genre.title}
              </DropDownItem>
            ))}
          </DropDownList>
        )}
      </StyledDropDown>
    );
  }
}

DropDown.propTypes = {
  choiceGenre: PropTypes.string.isRequired,
  headerTitle: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default DropDown;
