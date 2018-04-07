import React from 'react';
import PropTypes from 'prop-types';
import StyleOption from './StyleOption';

const StyleMenu = props => (
  <div className="style-menu">
    <StyleOption onClick={() => props.handleSelect("classic")} contextClass="classic"/>
    <StyleOption onClick={() => props.handleSelect("inverted")} contextClass="inverted"/>
    <StyleOption onClick={() => props.handleSelect("green-white")} contextClass="green-white"/>
    <StyleOption onClick={() => props.handleSelect("settlers-red")} contextClass="settlers-red"/>
    <StyleOption onClick={() => props.handleSelect("settlers-yellow")} contextClass="settlers-yellow"/>
  </div>
);

StyleMenu.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  toggleStyleMenu: PropTypes.func.isRequired
};

export default StyleMenu;
