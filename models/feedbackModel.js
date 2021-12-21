import mongoose from 'mongoose';

const feedSchema = new mongoose.Schema({
    form: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, //timestamp
        default: Date.now(),
        select: false //hidden from op
    },
})

const feedbackForm = mongoose.model8("forms", feedSchema);
export default feedbackForm;