import feedbackForm from "../models/feedbackModel";
import asyncHandler from "express-async-handler";
import APIFeatures from "./../utils/apiFeatures";

const sendFeedback = asyncHandler(async (req, res) => {
    const newForm = new feedbackForm({
        form: req.body.form
    })
    newForm.save().then((form) => res.send(form)).catch((err) => {
        res.status(500);
        throw new Error("Internal Error: Caused at Test Creation")
    })
})

//for viewing the feedbacks. admin only
const getFeedback = asyncHandler(async (req, res) => {
    try {
        const viewForms = new APIFeatures(feedbackForm.find(), req.query()).sort();
        const forms = await viewForms.query;
        res.status(200).json({
            status: 'success',
            results: result.length,
            data: {
                forms  //tours - name of the resource.
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
})

export { sendFeedback, getFeedback };