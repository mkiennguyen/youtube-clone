import React from "react";
import "../assets/RecommendedVideos.css";

import Tag from "../../Home/components/Tag";
import RecommendedVideo from "./RecommendedVideo";
export default function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <div className="recommendedVideos__tags">
        <Tag />
      </div>

      <RecommendedVideo />
    </div>
  );
}
