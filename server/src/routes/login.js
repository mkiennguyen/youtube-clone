import { Router } from "express";
import passport from "passport";

const router = Router();

// initial authentication flow
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// handle response from google
router.get("/google/callback", passport.authenticate("google"));

export default router;
