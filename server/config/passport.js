// config auth google with passport

import passport from "passport";
import { Strategy } from "passport-google-oauth20";

import config from "./config.js"; // remember must have file .js to access file
import User from "../src/models/User.js";

const GoogleStrategy = Strategy;

const passportConfig = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: config.googleCredentials.clientId,
        clientSecret: config.googleCredentials.clientSecret,
        callbackURL: config.googleCredentials.callBackUrl,
      },
      async (accessToken, refreshToken, profile, done) => {
        /* -This tim ,user received data from server
          -Check user's info 
                 available:return user's info
                 unavailable: create a new user 
        */
        const findUser = await User.findOne({ googleId: profile.id });
        /* findUser return true or false 
                false : cannot find user in fb
                true : found user in db 
        */

        // findUser is false : create a new user
        if (!findUser) {
          // build an user record
          const createNewUser = new User({
            googleId: profile.id,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            displayName: profile.displayName,
            givenName: profile.name.givenName,
            familyName: profile.name.familyName,
          });

          //save and return user's info
          const userRecordSaved = await createNewUser.save();

          return done(null, userRecordSaved);
        }
        // findUser is true : return user data
        done(null, findUser);
      }
    )
  );

  // this function save user data in session
  passport.serializeUser((user, done) => {
    done(null, user.googleId);
  });

  //this function get user data based on data saved in session
  passport.deserializeUser(async (googleId, done) => {
    const findUser = await User.findOne({ googleId });
    done(null, findUser);
  });
};

export default passportConfig;
