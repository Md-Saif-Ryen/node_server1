const express = require('express');
require("dotenv").config();

const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL
// const link = 'mongodb+srv://ks7046344:Simple123@learn.hycink4.mongodb.net/';
const connection = mongoose.createConnection(DB_URL).on('open',()=>{
    console.log("App is successfully connected to database");
}).on("error", ()=>{
        console.log("App is unsuccessfully connected to database");

}).on("disconnected",()=>{
    console.log("App is successfully disconnected to database");

});

module.exports = connection;