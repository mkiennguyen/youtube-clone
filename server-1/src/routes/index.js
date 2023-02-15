import { Router } from "express";

import videosRoute from "./videos.js";
import loginRoute from "./login.js";

const router = Router();

// manage route follow part partial

router.use("/videos", videosRoute);

router.use("/auth", loginRoute);

export default router;
