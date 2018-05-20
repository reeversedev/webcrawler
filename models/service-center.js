const mongoose = require('mongoose');

const serviceCenterSchema = mongoose.Schema({
    name: String,
    category1: String,
    category2: String,
    experience: String
});
module.exports = mongoose.model('ServiceCenter', serviceCenterSchema);

// module.exports.newServiceCenter = (serviceCenter, callback) => {
//     console.log('Models', serviceCenter);
//     serviceCenter.save(callback);
// }