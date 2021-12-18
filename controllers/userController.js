import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
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
    const { email,password } = req.body;

    const user = await User.findOne({email: email})

    if(user && await user.matchPassword(password)){
        res.json({
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(401);
        res.send("Unauthorised");
    }
})

export { registerUser, loginUser }