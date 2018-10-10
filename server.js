const express = require("express");
const bodyParser = require("body-parser");
const { getStudents, getStudentById, addNewStudent, updateStudent, patchStudentInfo, deleteStudent } = require("./storage");
const app = express(); // create app

app.use(bodyParser.json());

app.get("/students", (req, res) => res.json(getStudents()));

app.get("/students/:studentId", (req, res) => res.json(getStudentById(req.params.studentId)));

app.post("/students", function(req, res) {
    const student = req.body.student;
    res.json(addNewStudent(student));
});

app.put("/students/:studentId", function(req, res) {
    res.json(updateStudent(req.params.studentId, req.body))
});

app.patch("/students/:studentId", function(req, res) {
    res.json(patchStudentInfo(req.params.studentId, req.body));
});

app.delete("/students/:studentId", function(req, res) {
    const deletedStudent = deleteStudent(req.params.studentId)
    deletedStudent?res.status(204).json({message:'deleted'}):res.status(404).json({message:'Student not found'})
});

app.listen(8080, function() {
  console.log("Listening on port 8080!"); 
});
