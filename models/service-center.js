const mongoose = require('mongoose');

const serviceCenterSchema = mongoose.Schema({
    _id: String,
    name: String,
    category1: String,
    category2: String,
    experience: String,
    location: String
});
module.exports = mongoose.model('ServiceCenter', serviceCenterSchema);