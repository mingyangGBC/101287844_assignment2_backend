const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const EmployeeSchema = mongoose.Schema({
    
    _id: Number,
    fName: {type: String, required: true},
    lName: {type: String, required: true},
    email: {type: String, required: true, validate: [validateEmail, 'Please fill a valid email address']}

},
{ _id: false }, {
    timestamps: true
});
EmployeeSchema.plugin(AutoIncrement);


module.exports = mongoose.model('Employee', EmployeeSchema);