import React from 'react';
import PropTypes from 'prop-types';
import StyleOption from './StyleOption';

const StyleMenu = props => (
  <div className="style-menu">
    <StyleOption onClick={() => props.handleSelect("settlers-red")} contextClass="settlers-red"/>
    <StyleOption onClick={() => props.handleSelect("orange")} contextClass="orange"/>
    <StyleOption onClick={() => props.handleSelect("settlers-yellow")} contextClass="settlers-yellow"/>
    <StyleOption onClick={() => props.handleSelect("green")} contextClass="green"/>
    <StyleOption onClick={() => props.handleSelect("blue")} contextClass="blue"/>
    <StyleOption onClick={() => props.handleSelect("purple")} contextClass="purple"/>
    <StyleOption onClick={() => props.handleSelect("pink")} contextClass="pink"/>
    <StyleOption onClick={() => props.handleSelect("inverted")} contextClass="inverted"/>
    <StyleOption onClick={() => props.handleSelect("classic")} contextClass="classic"/>
  </div>
);

StyleMenu.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  toggleStyleMenu: PropTypes.func.isRequired
};

export default StyleMenu;
