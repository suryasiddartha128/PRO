const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://suryasiddartha01:lkjhgfdsa@in-aws.g1bhz.mongodb.net/med-store?retryWrites=true&w=majority&appName=in-aws")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')