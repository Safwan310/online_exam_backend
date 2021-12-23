import mongoose from "mongoose";

const issueSchema = mongoose.Schema({
    postedBy:{
        type:String,
        required: true
    },
    subjectName:{
        type:String,
        required: true
    },
    testName:{
        type:String,
        required: true
    },
    issue:{
        type:String,
        required: true
    }
},{
    timestamps:true
}
)

const Issue = mongoose.model("Issue",issueSchema);

export default Issue;