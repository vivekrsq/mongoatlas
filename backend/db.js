const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
const connectMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
    console.log('connected to mongo Successfully');
});
}

module.exports = connectMongo;