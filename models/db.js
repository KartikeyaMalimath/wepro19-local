const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if(!err) { console.log('MongoDB connected');}
    else { console.log('Error connecting:' + JSON.stringify(err, undefined, 2)); }
});

require('./Fdata.model');
require('./login.model');