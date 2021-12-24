import express from 'express';
import { registerUser, loginUser, getSubjects, getTests, getIndividualTest, submitTestAnswers, getMarks, getProfile, submitIssue } from '../controllers/userController.js';
import { protectUserRoute } from '../middleware/authMiddleware.js';

const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.post('/login', loginUser);
userRoute.get('/subjects', protectUserRoute, getSubjects);
userRoute.post('/tests', protectUserRoute, getTests);
userRoute.post('/test',protectUserRoute,getIndividualTest);
userRoute.post('/submit',protectUserRoute,submitTestAnswers);
userRoute.post('/marks',protectUserRoute,getMarks);
userRoute.post('/profile',protectUserRoute,getProfile);
userRoute.post('/issue',protectUserRoute,submitIssue);
export default userRoute;
