import Test from "../models/test.model.js"
import Subject from "../models/subject.model.js"
import asyncHandler from "express-async-handler";
//Check for pre existing tests
const createTest = asyncHandler(async (req, res) => {
        const newTest = new Test({
            subjectName:req.body.subjectName,
            testName: req.body.testName,
            testQuestions: req.body.testQuestions
        })
        newTest.save()
        .then((test)=>res.send(test))
        .catch((err)=>{
            res.status(500);
            throw new Error("Internal Error: Caused at Test Creation");
        })
})
//Check for pre existing subjects
const createSubject = asyncHandler(async (req, res) => {
        const newSubject = new Subject({
            subjectName: req.body.subjectName,
            subjectImageUrl: req.body.subjectImageUrl
        })
        newSubject.save()
        .then((subject)=>res.send(subject))
        .catch((err)=>{
            res.status(500);
            throw new Error("Internal Error: Caused at Subject Creation");
        })
})

export { createSubject,createTest }