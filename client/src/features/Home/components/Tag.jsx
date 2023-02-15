import React from "react";
import PropTypes from "prop-types";

import "../assets/Tag.css";

export default function Tag({ name, selectedTag, handleGetDataFollowTag }) {
  return (
    <div
      className={`tag ${selectedTag === name ? "tag--highlight" : ""}`}
      onClick={() => handleGetDataFollowTag(name)}
    >
      {name}
    </div>
  );
}

Tag.propTypes = {
  name: PropTypes.string,
  selectedTag: PropTypes.string,
  handleGetDataFollowTag: PropTypes.func,
};

Tag.defaultProps = {
  name: "none",
  selectedTag: "",
  handleGetDataFollowTag: () => {},
};
