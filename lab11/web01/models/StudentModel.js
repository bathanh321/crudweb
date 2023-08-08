const mongoose = require('mongoose')
var StudentSchema = mongoose.Schema({
    name: String,
    dob: Date,
    gender: String,
    department: String,
    class: String,
    image: String,
    gpa: Number,
    studentYear: Number,
    sound: String
});
const StudentModel = mongoose.model('student', StudentSchema, 'student')
module.exports = StudentModel;