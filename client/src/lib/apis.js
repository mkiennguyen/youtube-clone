import axios from "axios";

const YoutubeClone = axios.create({
  baseURL: "http://localhost:8000",
});

// videos?tag=nameTag
export const GET_VIDEOS_FOLLOW_TAG = (data) =>
  YoutubeClone.get(`videos?tag=${data}`);

// subscribe?video=idVideo
export const SUBSCRIBED_VIDEO = (idVideo) =>
  YoutubeClone.patch(`subscribe?video=${idVideo}`);

//
