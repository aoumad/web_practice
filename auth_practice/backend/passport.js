const passport = require('passport');
const  GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const IntraStrategy = require("passport-42").Strategy;

const GOOGLE_CLIENT_ID = "your id";
const GOOGLE_CLIENT_SECRET = "your id";

const GITHUB_CLIENT_ID = "your id";
const GITHUB_CLIENT_SECRET = "your id";

const INTRA_CLIENT_ID = "your id";
const INTRA_CLIENT_SECRET = "your id";


passport.use(
    new GithubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback",
        },
        function( accessToken, refreshToken, profile, done)
        {
            done(null, profile);
        }

    )
);

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        function(accessToken, refreshToken, profile, done)
        {
            done(null, profile);
        }
    )
);

passport.use(
    new IntraStrategy(
        {
            clientID: INTRA_CLIENT_ID,
            clientSecret: INTRA_CLIENT_SECRET,
            callbackURL: "/auth/intra/callback",
        },
        function(accessToken, refreshToken, profile, done)
        {
            done(null, profile);
        }
    )
);


passport.serializeUser((user, done) =>
{
    done(null, user);
});

passport.deserializeUser((user, done) =>
{
    done(null, user);
});