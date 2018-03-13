
const yargs = require('yargs');
var geocode = require('./geocode/geocode');

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


geocode.geocodeAddress(argv.address, function(err, results){
  if(err){
    console.log(err);
  } else{
    console.log(JSON.stringify(results, undefined, 2));
  }
});



//callback rqst
