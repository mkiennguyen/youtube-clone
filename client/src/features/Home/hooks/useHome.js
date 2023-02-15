import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterVideoFollowTag,
  getAllVideo,
  selectTag,
} from "../state/homeSlice";
import Video from "../components/Video";
import LoadingTag from "../components/LoadingTag";
import Tag from "../components/Tag";
import { homeState } from "../state/homeSlice";

export default function useDisplayVideoFollowTag() {
  // dispatch move action to store
  const dispatch = useDispatch();
  // home's state
  const { videos, error, lazyLoading, loadingTag, selectedTag } = useSelector(
    homeState
  );

  // tags recommend for user
  const [tags, setTags] = useState([
    "all",
    "music",
    "gamming",
    "live stream",
    "hardware",
    "software",
  ]);

  // get data follow tag
  const handleGetDataFollowTag = (tagName) => {
    // 1. receive tagName
    // 2. save tagName
    // 4. tag selecting display background-color : black
    dispatch(selectTag(tagName));

    // 5. send api with tagName to get data
    dispatch(filterVideoFollowTag(tagName));
  };

  // get all video follow default "all" tag
  const handleGetAllVideo = (tagName) => {
    //1 . receive tagName
    //2 . send api with tagName
    dispatch(getAllVideo(tagName));
  };

  // get data follow "all" tag when first render
  useEffect(() => {
    handleGetAllVideo("all");
  }, []);

  // display all videos
  const displayVideos = () =>
    videos.length > 1
      ? videos.map((video) => {
          return <Video {...video} key={video._id} />;
        })
      : "";

  // display loading when user click on tag
  const displayLoadingTag = () => (loadingTag ? <LoadingTag /> : "");

  // display lazy loading when first get data or reload page
  const displayLazyLoading = () =>
    lazyLoading ? <div>lazy loading... </div> : "";

  // display tag recommend for user
  const displayTags = () =>
    tags.map((tag) => (
      <Tag
        key={tag}
        name={tag}
        selectedTag={selectedTag}
        handleGetDataFollowTag={handleGetDataFollowTag}
      />
    ));

  // display error
  const displayError = () => (error ? <div> error </div> : "");

  return {
    displayVideos,
    displayTags,
    displayError,
    displayLoadingTag,
    displayLazyLoading,
  };
}
