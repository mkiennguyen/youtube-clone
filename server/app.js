import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieSession from "cookie-session";
import passport from "passport";
import dotenv from "dotenv";

import { connectDB } from "./config/connectDB";
import router from "./routes/routes";
import passportConfigure from "./config/passport";

const app = express();
const PORT = 9998;

dotenv.config();
passportConfigure(passport);
morgan("tiny");

app.use(
  cookieSession({
    name: "session",
    keys: ["browncat"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.session());
app.use(passport.initialize());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", router);

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running at address: http://localhost:${PORT}`);
});
