const mongoose = require("mongoose");

const uri = "mongodb+srv://hanzo:Gh8TzUyYR8kBk2l6@cluster0.rgyzlv1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Students";

mongoose.connect(uri, {serverSelectionTimeoutMS: 20000,})
.then(() => {
    console.log("Database connected succesfully");
})
.catch((error) => {
    console.log("Failed to connect ", error)
})

const studentsSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    year: { type: String, required: true },
    phone: { type: Number, required: true },
    passport: { type: String, required: true },
    education_type: { type: String, required: true },
    education_lang: { type: String, required: true },
    education_time: { type: String, required: true },
    education_course: { type: String, required: true },
})

const collection = new mongoose.model("students_list", studentsSchema);
module.exports = collection;