const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var FdataSchema = new mongoose.Schema ({
    FName: {
        type : String,
        required: 'First name cannot be empty'
    },
    MName: {
        type: String
    },
    LName: {
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
FdataSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {  
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

mongoose.model('Fdata', FdataSchema);