import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/google",
    passport.authenticate("google", { scope: ["profile"], session: false })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:5173/");
  }
);

export default router;