import express from 'express';
import { registerUser, loginUser, getSubjects, getTests, getIndividualTest, submitTestAnswers, getMarks, getProfile } from '../controllers/userController.js';
import { sendFeedback } from '../controllers/feedbackController.js';
import { protectRoute } from '../middleware/authMiddleware.js';

const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.post('/login', loginUser);
userRoute.get('/subjects', protectRoute, getSubjects);
userRoute.post('/tests', protectRoute, getTests);
userRoute.post('/test',protectRoute,getIndividualTest);
userRoute.post('/submit',protectRoute,submitTestAnswers);
userRoute.post('/feedback', protectRoute, sendFeedback);
userRoute.post('/marks',protectRoute,getMarks);
userRoute.post('/profile',protectRoute,getProfile);

export default userRoute;
