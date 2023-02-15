import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "../assets/Video.css";

export default function Video({ videoImgUrl, videoUrl, title }) {
  return (
    <Link to={videoUrl} className="video">
      <img src={`${videoImgUrl}`} className="video__videoImg" />

      <div className="video__info">
        <div className="video__info__channelAvt">
          <img src="https://i.pinimg.com/564x/2d/f3/87/2df38767b3db71d9edf93f4b82801be2.jpg" />
        </div>

        <div className="video__info__shortInfoOfVideo">
          <div className="video__info__videoTitle">{title}</div>
          <div className="video__info__channel">
            <div className="video__info__channel__name">conmeomaunau</div>
            <img
              src="/images/verify-icon.svg"
              alt="verify-icon"
              className="video__info__channel__verify"
            />
          </div>

          <div className="video__info__view-time">
            <div>1.5k views</div>
            <div>-</div>
            <div>1 minutes ago</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

Video.propTypes = {
  videoImgUrl: PropTypes.string,
  videoUrl: PropTypes.string,
  title: PropTypes.string,
};
Video.defaultProps = {
  videoImgUrl: "yourImgUrl",
  videoUrl: "yourVideoUrl",
  title: "yourVideoTitle",
};
