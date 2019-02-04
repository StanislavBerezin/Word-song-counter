const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const config = require("./config/config");
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

require("./routes/routes")(app);
require("./db");


try{
  app.listen(config.port, err => {
    if (err) throw err;
    console.log(`Fugro interview app on ${config.port}`);
  });

}catch(e){
  console.log("Something went wrong when setting up the server, for more details" + e)
}


// used for testing
module.exports.app = app;
