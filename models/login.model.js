const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var loginSchema = new mongoose.Schema ({
    name : {
        type: String
    },
    email : {
        type: String
    },
    password : {
        type: String,
        required: 'password cannot be empty',
        minlength : [4, 'Password must be atleat 4 character long']
    },
    saltSecret : String
    
});

//events
loginSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {  
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

mongoose.model('login', loginSchema);