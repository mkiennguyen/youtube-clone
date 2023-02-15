import React from "react";

import useHome from "./hooks/useHome";
import "./assets/Home.css";

export default function Home() {
  const {
    displayVideos, // display all video
    displayLazyLoading, // display lazy loading first get data
    displayError, //  displayError when get data from server
    displayTags, // display tag for user
    displayLoadingTag,
  } = useHome();

  displayError();
  return (
    <div className="home">
      <div className="home__category">
        <div className="home__category__tags">{displayTags()}</div>
      </div>
      <div className="wall-row-category"></div>
      <div className="videoList">{displayVideos()}</div>
      {displayLazyLoading()}
      {displayLoadingTag()}
    </div>
  );
}
