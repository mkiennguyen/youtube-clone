import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    _userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    // will generate when video created
    videoUrl: {
      type: String,
      required: true,
    },

    videoImgUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      required: true,
    },

    category: {
      type: [String],
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

/* 
---video 
     ---views 
     ---comments
     ---likes
     ---dislikes 
*/

export default mongoose.model("videos", videoSchema);
