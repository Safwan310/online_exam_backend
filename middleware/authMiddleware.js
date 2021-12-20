import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

const protectRoute = asyncHandler(async(req,res,next)=>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        console.log('Token found');
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            console.log(decoded)

            req.user = await User.findById(decoded.id).select('-password')

        } catch (error) {
            console.log(`Error at middleware: ${error}`);
            res.status(401);
            throw new Error('Unauthorised. Token Failed');
        }
        
    }

    if(!token){
        res.status(401);
        throw new Error('Unauthorised')
    }

    next();
})

export { protectRoute }