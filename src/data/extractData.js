const fs = require("fs");
const csv = require("csv-parser");
const path = require('path');

let count = 0;
let json = []

fs.createReadStream("./Data.csv")
  .pipe(csv())
  .on("data", function (match) {
    if (count < 10000) {
        json.push(match); 
      count++;
    }
  })
  .on("end", function () { 
    json = JSON.stringify(json);
      fs.writeFile('allrides.json', json, 'utf8', (err, success) => {
          if(err) throw err;
          console.log('writing to disk ended')
      })
  });
