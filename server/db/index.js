const mongoose = require('mongoose');
const config = require("../config/config");

mongoose.connect(config.db.mongoAtlas, {
    useNewUrlParser: true,
}).then((res) => {
    console.log("Connection has been succesfuly established")
}).catch(e => {
    console.log('Connection failed due to' + e)
})