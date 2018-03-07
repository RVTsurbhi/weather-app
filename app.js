const request = require('request');

//callback rqst
request({
  url: "https://maps.googleapis.com/maps/api/geocode/json?address=morni%20panchkula%20haryana",
  json: true
}, (err, res, body) =>{
  //the 3rd argument specify the no. of spaces for indentation
   console.log(JSON.stringify(body, undefined, 2));
});
