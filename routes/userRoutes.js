import express from 'express';
import { registerUser, loginUser, getSubjects } from '../controllers/userController.js';
import { protectRoute } from '../middleware/authMiddleware.js';

const userRoute = express.Router();

userRoute.post('/register',registerUser);
userRoute.get('/login',loginUser);
userRoute.get('/:subject',protectRoute, getSubjects);

export default userRoute;