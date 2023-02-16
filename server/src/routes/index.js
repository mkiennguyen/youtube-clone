import { Router } from "express";

import videosRoute from "./videos.js";
import loginRoute from "./login.js";

const router = Router();

// route use find a video or many videos
router.use("/videos", videosRoute);

// route use authentication with third party
router.use("/auth", loginRoute);

export default router;
