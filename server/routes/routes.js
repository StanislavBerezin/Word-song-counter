const songController = require("../controllers/songController");
const authController = require("../controllers/authController")
const validationPolicies = require("../policies/SongRequestValidation");

module.exports = app => {
  app.post(
    "/searchSong/:songname",
    validationPolicies.checkSongName,
    songController.findLyrics
  );
  app.post("/register", authController.register);

  app.post("/login", authController.login);

  app.post("/logout", authController.logout);

  app.post("/addSong", songController.addSong);

  app.get("/viewSongs/:token", songController.viewSongs)
};
