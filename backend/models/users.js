const mongoose = require('mongoose');
const { Schema } = mongoose;

const Users = new Schema({
    email:  {
       type: String,
       required: true
    },
    password: {
        type: String,
        required: true
    }
        
    
  });

module.exports = mongoose.model('user', Users);