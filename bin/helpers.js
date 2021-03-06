const fs                        = require('fs');
const config                    = require('./config');
const { getInstalledPathSync }  = require('get-installed-path');
var globalModulePath = getInstalledPathSync('build-express-api');

var helpers = {};

helpers.createBeaConfig = () => {
  if (!fs.existsSync('./beaConfig.json')) {
    var configText = fs.readFileSync(globalModulePath+'/templates/configTemplate.json');

    fs.writeFileSync('beaConfig.json', configText);
    return true;
  }
  return false;
}

helpers.loadBeaConfig = () => {
  var config = fs.readFileSync('./beaConfig.json').toString();
  return JSON.parse(config);
}

module.exports = helpers;