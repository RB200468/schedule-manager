import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { requireEnv } from "../config/env.js";
import type { GoogleStrategyOptions } from "../types/types.js";

const googleOptions:GoogleStrategyOptions = {
    clientID: requireEnv("GOOGLE_CLIENT_ID"),
    clientSecret: requireEnv("GOOGLE_CLIENT_SECRET"),
    callbackURL: "http://localhost:5173/success"
}

passport.use(new GoogleStrategy(googleOptions,
  function(accessToken, refreshToken, profile, cb) {
    // This is where all the authorisation happens
    console.log(`${profile.displayName} has logged in successfully!`);
    return cb(null, profile);
  }
));