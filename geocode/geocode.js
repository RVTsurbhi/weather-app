const request = require('request');

 exports.geocodeAddress = function(address, callback){

   var encodedAddr = encodeURIComponent(address);
   request({
     url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`,
     json: true
   }, (err, res, body) =>{
     //error handling in callbacks using if else
     if(err){
       callback('unable to connect to google server');
     }else if(body.status === 'ZERO_RESULTS'){
       callback('unable to find the given address');
     }else if(body.status === 'OK'){
       callback(undefined, {
         address:body.results[0].formatted_address,
         latitude:body.results[0].geometry.location.lat,
         longitude:body.results[0].geometry.location.lng
       });
       // console.log(`Address: ${body.results[0].formatted_address}`);
       // console.log(`latitude: ${body.results[0].geometry.location.lat}`);
       // console.log(`longitude: ${body.results[0].geometry.location.lng}`);
       //
     }
   });
};
