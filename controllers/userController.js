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
    const user = await User.findById(req.user._id)

    if(user){
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    }
    else{
        res.status(404);
        throw new Error('User not found');
    }
})

export { registerUser, loginUser, getSubjects }