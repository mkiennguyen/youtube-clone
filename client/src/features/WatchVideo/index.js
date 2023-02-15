import React from "react";
import VideoPlaying from "./components/VideoPlaying";
import RecommendedVideos from "./components/RecommendedVideos";

import "./assets/WatchVideo.css";
import useWatchVideo from "./hooks/useWatchVideo";

export default function WatchVideo() {
  const { handleSubscribeVideo } = useWatchVideo();
  return (
    <div className="watchVideo">
      <VideoPlaying handleSubscribeVideo={handleSubscribeVideo} />
      <RecommendedVideos />
    </div>
  );
}
