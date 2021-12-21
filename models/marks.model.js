import mongoose from 'mongoose';

const marksSchema = new mongoose.Schema({
    studentName:{
        type:String,
        required:true
    },
    studentId:{
        type:String,
        required:true
    },
    subjectName:{
        type:String,
        required:true
    },
    testName:{
        type:String,
        required:true
    },
    marks:{
        type:Number,
        required:true
    }
})

const Marks = mongoose.model("Marks",marksSchema);

export default Marks;