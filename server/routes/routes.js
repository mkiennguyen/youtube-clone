import passport from "passport";
import { Router } from "express";

const router = Router();

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfully",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect(CLIENT_URL);
// });

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/google/callback", (req, res, next) => {
  passport.authenticate("google", {
    successRedirect: "/login/success",
    failureRedirect: "/login/failed",
  });
});

export default router;
