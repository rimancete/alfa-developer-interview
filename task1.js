var https = require('https');
var serviceRoot = 'https://services.odata.org/TripPinRESTierService/(S(kgoeuh1x0jveff0efe4lodbl))/';
getURL(serviceRoot + `People?$select=FirstName,LastName&$filter=contains(UserName,'henry')`);
function getURL(url) {
    var body = '';
    https.get(url, function (response) {
        response.on('data', function (chunk) {
            body+=chunk;
        });
        response.on('end', function () {
            return console.log(body);
        });
    }).on('error', function(e) {
        return console.log('ERROR: ' + e.message);
    });
    }
