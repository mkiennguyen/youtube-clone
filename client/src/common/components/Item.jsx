import React from "react";

import PropTypes from "prop-types";

import "../assets/css/Item.css";

import { Link } from "react-router-dom";

export default function Item({ tagName, iconUrl, path }) {
  return (
    <Link to={path} className="item">
      <img src={`/images/${iconUrl}`} alt="" className="item__icon" />
      <div className="item__name"> {tagName} </div>
    </Link>
  );
}

Item.propTypes = {
  tagName: PropTypes.string,
  iconUrl: PropTypes.string,
  path: PropTypes.string,
};

Item.defaultProps = {
  tagName: "none",
  iconUrl: "",
  path: "",
};
