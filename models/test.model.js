import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
    subjectName:{
        type:String,
        required:true
    }
    testName: {
        type:String,
        required:true
    },
    testQuestions:{
        type:Array,
        required:true
    },
    attended:{
        type:Boolean,
        required:true
    }
},
{
    timestamps:true
}
)

const Test = mongoose.model("Test",testSchema)

export default Test;