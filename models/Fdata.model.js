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
    }

});



mongoose.model('Fdata', FdataSchema);