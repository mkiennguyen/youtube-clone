import { useDispatch, useSelector } from "react-redux";
import { subscribeVideo, watchVideoState } from "../state/watchVideoSlice";

import { typingComment } from "../state/watchVideoSlice";

export default function useWatchVideo() {
  const dispatch = useDispatch();

  // state of the  watchVideo
  const { subscribe, comment } = useSelector(watchVideoState);

  // subscribe video
  const handleSubscribeVideo = () => {
    dispatch(subscribeVideo("1"));
  };

  // get data in comment input to enable comment button
  const handleTypingComment = (e) => {
    const currentComment = e.target.value.length > 0;
    dispatch(typingComment(currentComment));
  };

  return {
    subscribe,
    comment,
    handleSubscribeVideo,
    handleTypingComment,
  };
}
