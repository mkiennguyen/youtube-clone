import { useDispatch, useSelector } from "react-redux";
import { subscribeVideo, watchVideoState } from "../state/watchVideoSlice";

export default function useWatchVideo() {
  const dispatch = useDispatch();

  // state of the  watchVideo
  const { subscribe } = useSelector(watchVideoState);

  const handleSubscribeVideo = () => {
    dispatch(subscribeVideo("1"));
  };

  return {
    handleSubscribeVideo,
    subscribe,
  };
}
