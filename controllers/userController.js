import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Subject from "../models/subject.model.js";
import Test from "../models/test.model.js";
//CHECK FOR PRE EXISTING USERZZ
const registerUser = asyncHandler(async(req,res)=>{
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    })

    newUser
    .save()
    .then((user)=>res.send(user))
    .catch((err)=>{
        res.status(500);
        console.log(`Error at registration: ${err}`)
    })
})

const loginUser = asyncHandler(async(req,res)=>{
    const { email,password,isAdmin } = req.body;

    const user = await User.findOne({email: email})
    if(user && await user.matchPassword(password)){
        if((req.originalUrl.startsWith("/admin")&&isAdmin)||
        (req.originalUrl.startsWith("/users")&&!(isAdmin)))
        {res.json({
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })}
        else{
            res.status(401);
            res.send("Unauthorised");
        }
    }
    else{
        res.status(401);
        res.send("Unauthorised");
    }
})

const getSubjects = asyncHandler(async(req,res)=>{
    const subs = await Subject.find({})

    if(subs){
        res.send(subs)
    }
    else{
        res.status(500);
        throw new Error('Internal error: At fetching subjects');
    }
})

const getTests = asyncHandler(async(req,res)=>{
    const { subject } = req.body;
    
    const tests = await Test.find({subjectName:subject})

    if(tests){
        res.send(tests);
    }
    else{
        res.status(404);
        throw new Error('Subject not found')
    }
})

const getIndividualTest = asyncHandler(async(req,res)=>{
    const { subject, testName } = req.body;

    const test = await Test.findOne({$and:[{subjectName:subject},{testName:testName}]})

    if(test){
        res.send(test);
    }
    else{
        res.status(404);
        throw new Error("Test not found");
    }
})
export { registerUser, loginUser, getSubjects, getTests, getIndividualTest }