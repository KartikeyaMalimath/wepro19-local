const mongoose = require('mongoose');

const Fdata = mongoose.model('Fdata');
const login = mongoose.model('login');

module.exports.FRegister = (req,res,next) => {
    console.log('testing reg fn');
    var faculty = new Fdata();
    var logindata = new login();
    faculty.FName = req.body.FName;
    faculty.MName = req.body.MName;
    faculty.LName = req.body.LName;
    logindata.name = req.body.name;
    logindata.password = req.body.password;
    logindata.email = req.body.email;
    faculty.save((err, doc) => {
        if(!err)
            res.send(doc);
        else    
            console.log(err);
    });
    logindata.save((err, doc) => {
        if(!err)
            res.send(doc);
        else    
            console.log(err);
    })
} 