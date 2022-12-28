import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
  const userName = process.env.MONGO_USERNAME;
  const password = process.env.MONGO_PASSWORD;

  const collection = "";

  const MONGO_URL = `mongodb+srv://${userName}:${password}@cluster0.61s3nlo.mongodb.net/${collection}`;
  await mongoose.connect(MONGO_URL);
  console.log("connected mongodb success");
};
