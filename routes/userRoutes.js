import express from 'express';
import { registerUser, loginUser, getSubjects, getTests } from '../controllers/userController.js';
import { sendFeedback } from '../controllers/feedbackController';
import { protectRoute } from '../middleware/authMiddleware.js';

const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.post('/login', loginUser);
userRoute.get('/subjects', protectRoute, getSubjects);
userRoute.get('/tests', protectRoute, getTests);
userRoute.post('/test',protectRoute,getIndividualTest);
userRoute.post('/feedback', protectRoute, sendFeedback);

export default userRoute;
