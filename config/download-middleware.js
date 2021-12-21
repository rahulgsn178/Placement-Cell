const ObjectsToCsv = require('objects-to-csv');
const fs = require('fs');
const Student = require('../models/student');


module.exports.start = async (req, res) => {

    const data = await Student.find({});
    console.log(data);
    if(data.length === 0) { 
        console.log('No data available yet');
        return res.json({
            "message": "There is no data available for the students now. Please create student"
        });
    }
    // If you use "await", code must be inside an asynchronous function:
    const csv =  new ObjectsToCsv(data);
  
    // Save to file:
    await csv.toDisk('./downloads/student.csv');
  
    // Return the CSV file as string:
    // console.log(await csv.toString());
    
    return res.download("./downloads/student.csv", () => {
     fs.unlinkSync("./downloads/student.csv");
    });
}