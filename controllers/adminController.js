const Test = require('./../models/test.model');
const Subject = require('./../models/subject.model');

exports.createTest = async (req, res) => {
    try {
        const newTest = await Test.create(req.body);
        res.status(201).json({      //201-created
            status: 'success',
            data: {
                data: newTest
            }
        });
    } catch (err) {
        res.status(400).json(
            {
                status: 'fail',
                message: 'Error'
            }
        )
    }
}

exports.createSubject = async (req, res) => {
    try {
        const newSubject = await Subject.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                data: newSubject
            }
        });
    } catch (err) {
        res.status(400).json(
            {
                status: 'fail',
                message: 'Error'
            }
        )
    }
}
