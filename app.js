const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'weather of the given address',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

console.log(argv);

//to make dynamic address by adding the variable in our url
var encodedAddr = encodeURIComponent(argv.address);


//callback rqst
request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`,
  json: true
}, (err, res, body) =>{
  //error handling in callbacks using if else
  if(err){
    console.log('unable to connect to google server');
  }else if(body.status === 'ZERO_RESULTs'){
    console.log('unable to find the given address');
  }else if(body.status === 'OK'){
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`longitude: ${body.results[0].geometry.location.lng}`);

  }

});
