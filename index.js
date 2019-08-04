var https = require('https');
var querystring = require('querystring');

module.exports = function getPayment (req, response) {

  // form data
  var postData = querystring.stringify(req.params);

  // request option
  var options = {
    host: 'us-central1-strongo-early-adopters.cloudfunctions.net',
    port: 443,
    method: 'POST',
    path: '/getPayment',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postData.length
    }
  };

  // request object
  var request = https.request(options, function (res) {
    var result = '';
    res.on('data', function (chunk) {
      result += chunk;
    });
    res.on('end', function () {
      console.log(result, 'resume');
      response.json(result);
      response.end();
    });
    res.on('error', function (err) {
      console.log(err, 'error');
    })
  });

  // req error
  request.on('error', function (err) {
    console.log(err);
  });

  //send request witht the postData form
  request.write(postData);
  request.end();
};
