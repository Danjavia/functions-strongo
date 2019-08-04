const request = require('request');

module.exports = function getPayment (req, res) {
  request.post({
      url: 'https://us-central1-strongo-early-adopters.cloudfunctions.net/getPayment',
      form: req.params
    }, function(err, httpResponse, body) {
      console.log(httpResponse, body);
    }
  );
};
