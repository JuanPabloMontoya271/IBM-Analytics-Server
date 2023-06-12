const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const pool = require("../db");
const { encryptPassword, matchPassword } = require("../lib/helpers");

passport.use(
  "local.login",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      console.log(username);
      const rows = pool.query(
        "SELECT * FROM user WHERE BINARY username = ?",
        [username],
        (req, res, err) => {
          console.log(res);
          if (res.length > 0) {
            console.log(password == res[0].password);
            if (password == res[0].password) {
              return done(null, res[0]);
            } else {
              return done(null, false);
            }
          } else {
            return done(null, false);
          }
        }
      );
    }
  )
);
passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      if (password == undefined || username == undefined) {
        return done(null, false);
      }
      try {
        const rows = pool.query(
          `INSERT INTO user (username, password) VALUES ('${username}', '${password}')`,
          (req, res, err) => {
            if (res != undefined) {
              let id = res["insertId"];
              let user_data = {
                id: id,
                username: username,
                password: password,
              };
              return done(null, user_data);
            } else {
              return done(null, false);
            }
          }
        );
      } catch {
        return done(null, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const rows = pool.query(
    "SELECT * FROM user WHERE id = ?",
    [id],
    (req, res, err) => {
      console.log(res[0]);
      return done(null, res[0]);
    }
  );
});
