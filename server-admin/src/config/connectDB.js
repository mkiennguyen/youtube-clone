import mongoose from "mongoose";

export const connectDB = async () => {
  const userName = process.env.MONGO_USERNAME;
  const password = process.env.MONGO_PASSWORD;

  const collection = "youtube-clone";

  const MONGO_URL = `mongodb+srv://${userName}:${password}@cluster0.61s3nlo.mongodb.net/${collection}`;

  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected mongodb success");
  } catch (err) {
    console.log(err);
  }
};
