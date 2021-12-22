const ObjectsToCsv = require('objects-to-csv');
const fs = require('fs');
const Student = require('../models/student');


module.exports.start = async (req, res) => {

    const data = await Student.find({});
    const result = [];
    
    if(data.length === 0) { 
        console.log('No data available yet');
        return res.json({
            "message": "There is no data available for the students now. Please create student"
        });
    }

    // pushing result
    data.forEach((student) => {
        let { _id, name, email, college, batch, phone, course, score, companies} = student;
        let obj = {
            StudentID: _id.toString(),
            Name: name,
            Email: email, 
            College: college,
            Batch: batch,
            Phone: phone,
            Course: course,
            DsaScore: score[0],
            WebDScore: score[1],
            ReactScore: score[2],
            Company: companies[0].name,
            InterviewDate: companies[0].date,
            Status: companies[0].status  
        }
        result.push(obj);
    });


    // If you use "await", code must be inside an asynchronous function:
    const csv =  new ObjectsToCsv(result);
    
    // Save to file:
    await csv.toDisk('./downloads/student.csv');
  
    // Return the CSV file as string:
    // console.log(await csv.toString());
    
    return res.download("./downloads/student.csv", () => {
        fs.unlinkSync("./downloads/student.csv");
    });
}
  