import React from "react";
import PropTypes from "prop-types";
import IconButton from "./IconButton";

const Navigation = props => (
  <div className="nav-bar">
    <IconButton
      className="nav-button nav-create"
      icon="add_circle"
      label="Add a new die"
      onClick={() => props.setModal("create")}
      size={48}
    />
    <button className="nav-button nav-roll" onClick={props.rollAll}>
      Roll
    </button>
    <IconButton
      className="nav-button nav-settings"
      icon="settings"
      label="Edit settings"
      onClick={() => props.setModal("settings")}
      size={48}
    />
  </div>
);

Navigation.propTypes = {
  addMany: PropTypes.func.isRequired,
  addOne: PropTypes.func.isRequired,
  rollAll: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired
};

export default Navigation;
