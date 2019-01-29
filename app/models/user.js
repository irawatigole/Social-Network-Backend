const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // address: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }, 
    date: {
        type: Date,
        default: Date.now
    }
});


const User = mongoose.model('User', userSchema);

module.exports = { 
    User
}
