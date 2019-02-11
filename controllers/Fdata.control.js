const mongoose = require('mongoose');

const Fdata = mongoose.model('Fdata')

module.exports.FRegister = (req,res,next) => {
    console.log('testing reg fn');
    var faculty = new Fdata();
    faculty.FName = req.body.FName;
    faculty.MName = req.body.MName;
    faculty.LName = req.body.LName;
    faculty.password = req.body.password;
    faculty.save((err, doc) => {
        if(!err)
            res.send(doc);
        else    
            console.log(err);
    });
} 