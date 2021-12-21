import feedbackForm from "../models/feedbackModel.js";
import asyncHandler from "express-async-handler";

const sendFeedback = asyncHandler(async (req, res) => {
    
})

//for viewing the feedbacks. admin only
const getFeedback = asyncHandler(async (req, res) => {
    
})

export { sendFeedback, getFeedback };