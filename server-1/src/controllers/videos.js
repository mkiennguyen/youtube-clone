/* 
this api can get data follow:
tags  , title , date time , views , like or dislike , category
/api/videos
*/

import createError from "../../helpers/createError.js";
import Video from "../models/video.js";

const videos = async (req, res, next) => {
  // 1.receive and read request
  const { tag } = req.query;

  try {
    // 2. find data follow request
    const findVideos = await Video.find({});

    // 3. if occur the error then response success or failed

    // 4.  return data
    return res.status(200).json({ msg: "success", videos: findVideos });
  } catch (err) {
    next(err);
  }
};

export default videos;
