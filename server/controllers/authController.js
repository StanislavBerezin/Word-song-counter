const User = require("../models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports = {
  async register(req, res) {
    try {
      let { username, email, password } = req.body;

      const isUserRegistered = await User.findOne({
        email,
        username
      });
      if (isUserRegistered) {
        return res.status(400).send("User is already registered");
      }

      const user = await new User({
        _id: new mongoose.Types.ObjectId(),
        username,
        password,
        email
      });

      //then we save the user
      await user.save();
      await user.generateAuthToken();

      res.send(user);
    } catch (e) {
      res.status(400).send("Registration is incorrect");
    }
  },

  async login(req, res) {
    try {
      let { email, password } = req.body;

      const isUser = await User.findOne({
        email
      });
      if (!isUser) {
        return res.status(404).send("Wrong credentials");
      }

      const isPasswordRight = await isUser.comparePassword(password);

      if (!isPasswordRight) {
        return res.status(400).send("Wrong credentials");
      }

      await isUser.generateAuthToken();

      res.send(isUser);
    } catch (e) {
      res.status(400).send("Login is incorrect");
    }
  },

  async logout(req, res) {
    try {
      let { token } = req.body;

      const isUser = await User.findByToken(token);

      if (!isUser) {
        return res.send("Not found");
      }
      await isUser.removeToken(token);

      res.send("Logged out");
    } catch (e) {
      res.status(400).send("Could not log out");
    }
  }
};
