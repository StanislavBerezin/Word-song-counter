const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,

    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    songs: [],
    
    tokens:[{
        access:{
            type: String,
            required: true
        },
        token:{
            type: String,
            required: true
        }
    }]

    
});


require('./modelControllers/UserController')(userSchema);


module.exports = mongoose.model('User', userSchema);