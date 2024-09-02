const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");

const templatePath = path.join(__dirname, "../template");
console.log(templatePath)

app.use(express.static(path.join(__dirname, '../public')));
app.use('/template', express.static(path.join(__dirname, '../template')));



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", templatePath)

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/index", async (req, res) => {
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        year: req.body.year,
        phone: req.body.number,
        passport: req.body.passport,
        education_type: req.body.edu_type,
        education_lang: req.body.edu_lang,
        education_time: req.body.edu_time,
        education_course: req.body.edu_course,
    }

    if (!data.firstName || !data.lastName || !data.year || !data.phone || !data.passport) {
        return res.status(400).send("Missing required fields");
    }

    await collection.insertMany([data]);

    res.render("home")
})


app.listen(1111, () => {
    console.log("Port connected");
    
})
