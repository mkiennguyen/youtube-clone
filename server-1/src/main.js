import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";

import routes from "./routes/index.js";
import connectDb from "../config/connectDb.js";
import config from "../config/config.js";
import errorHandler from "../middlewares/errorHandler.js";
import passport from "passport";

import passportConfig from "../config/passport.js";

// initial app
const app = express();

// config
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5000",
    methods: "GET,POST,PUT,PATCH,DELETE",
  })
);

app.use(
  cookieSession({
    name: "session",
    keys: ["lama"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
passportConfig();
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use(routes);

// error handler
app.use(errorHandler);

// server is running at port
app.listen(config.port, () => {
  console.log(`server is running at address http://localhost:${config.port}`);
  connectDb();
});
