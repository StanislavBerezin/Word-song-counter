const Joi = require("joi");

module.exports = {
  //controller with next, which requires next() to be present before going to the next controller
  checkSongName(req, res, next) {
    const schema = {
      songname: Joi.string()
        .min(3)
        .max(30)
        .required()
    };

    // checking the parameteres in http request from client

    Joi.validate(req.params, schema, function (error, value) {
      //in case something happend
      if (error) {
        //this allows us to see what key element in schema failed
        switch (error.details[0].context.key) {
          case "songname":
            res.status(400).send({
              error: "Incorrect song name, check again"
            });
            break;
          default:
            res.status(400).send({
              error: "Internal error while validating song name"
            });
        }
      } else {
        next();
      }
    });
  }
};